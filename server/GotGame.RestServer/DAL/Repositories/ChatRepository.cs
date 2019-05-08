using GotGame.RestServer.DAL.Repositories.Base;
using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Storage;
using GotGame.RestServer.Models.Chat;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IChatRepository
  {
    void AddPlayerToChat(int chatId, int playerId);
    GameChat CreateGameChat(int gameId, string name);
    Task<GameChat> CreatePrivateChat(int gameId, int playerId, params int[] playerIds);
    void DeleteGameChats(int gameId);
    void DeletePlayerChats(int playerId);
    IList<GameChat> GetChatsByGameId(int gameId);
    IList<GameChat> GetPrivateChatsByPlayerId(int playerId);
    GameChat GetChatById(int chatId);
    GameChat UpdateGameChat(int chatId, ChatData chatData);
  }

  public class ChatRepository: BaseRepository, IChatRepository
  {
    private IList<GameChat> gameChats;

    private IPlayersRepository playersRepository;

    public ChatRepository(GoTGameContextDb context, IGoTStorage storage, IPlayersRepository playersRepository)
      :base(context, storage)
    {
      gameChats = new List<GameChat>();
      this.playersRepository = playersRepository;
    }

    public async void AddPlayerToChat(int chatId, int playerId)
    {
      GameChat gameChat = gameChats.FirstOrDefault(gc => gc.Id == chatId);

      if(gameChat != null)
      {
        string playerName = (await playersRepository.GetPlayerAsync(playerId)).Name;
        gameChat.Players.Add(new ChatPlayer(playerId, playerName));
      }
    }

    public GameChat CreateGameChat(int gameId, string name = "")
    {
      GameChat gameChat = new GameChat { GameId = gameId, Name = name };
      if (gameChats.Any())
        gameChat.Id = gameChats.Last().Id + 1;
      else
        gameChat.Id = 1;
      gameChats.Add(gameChat);

      return gameChat;
    }

    public async Task<GameChat> CreatePrivateChat(int gameId, int playerId, params int[] playerIds)
    {
      if (playerIds.Distinct().Count() != 2)
        return null;
      var existedPrivateChat = CheckIfPrivateChatExist(gameId, playerIds);
      if (existedPrivateChat != null)
        return existedPrivateChat;

      List<ChatPlayer> chatPlayers = new List<ChatPlayer>();
      for(int i = 0; i < playerIds.Length; i++)
      {
        bool isNew = playerId != playerIds[i];
        string playerName = (await playersRepository.GetPlayerAsync(playerIds[i])).Name;
        chatPlayers.Add(new ChatPlayer(playerIds[i], playerName, isNew));
      }

      GameChat gameChat = new GameChat(playerId, chatPlayers.ToArray()) { GameId = gameId, IsPrivate = true, Name = "" };
      if (gameChats.Any())
        gameChat.Id = gameChats.Last().Id + 1;
      else
        gameChat.Id = 1;

      gameChats.Add(gameChat);
      return gameChat;
    }

    public void DeleteGameChats(int gameId)
    {
      var chats = gameChats.Where(gc => gc.GameId == gameId);
      foreach(var chat in chats)
      {
        gameChats.Remove(chat);
      }
    }

    public void DeletePlayerChats(int playerId)
    {
      var playerChats = gameChats.Where(gc => gc.Players.Any(cp => cp.PlayerId == playerId)).ToList();

      for(int i = 0; i < playerChats.Count(); i++)
      {
        gameChats.Remove(playerChats[i]);
      }
    }

    public IList<GameChat> GetChatsByGameId(int gameId)
    {
      return gameChats.Where(gc => gc.GameId == gameId).ToList();
    }

    public IList<GameChat> GetPrivateChatsByPlayerId(int playerId)
    {
      return gameChats.Where(gc => gc.Players.Any(cp => cp.PlayerId == playerId) && gc.IsPrivate).ToList();
    }

    public GameChat GetChatById(int chatId)
    {
      return gameChats.FirstOrDefault(gc => gc.Id == chatId);
    }

    public GameChat UpdateGameChat(int chatId, ChatData chatData)
    {
      GameChat gameChat = GetChatById(chatId);

      if (gameChat != null)
      {
        gameChat.ChatDatas.Add(chatData);
      }

      return gameChat;
    }

    private GameChat CheckIfPrivateChatExist(int gameId, int[] playerIds)
    {
      var gameChats = GetChatsByGameId(gameId).Where(gc => gc.IsPrivate);
      gameChats.FirstOrDefault(gc => gc.Players.All(cp => playerIds.Contains(cp.PlayerId)));

      return gameChats.FirstOrDefault(gc => gc.Players.All(cp => playerIds.Contains(cp.PlayerId)));
    }
  }
}
