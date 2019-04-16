using GotGame.RestServer.Models;
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
    GameChat CreatePrivateChat(int gameId, params int[] playerIds);
    void DeleteGameChats(int gameId);
    void DeletePlayerChats(int playerId);
    IList<GameChat> GetChatsByGameId(int gameId);
    GameChat GetChatById(int chatId);
    GameChat UpdateGameChat(int chatId, ChatData chatData);
  }

  public class ChatRepository: IChatRepository
  {
    private IList<GameChat> gameChats;

    public ChatRepository()
    {
      gameChats = new List<GameChat>();
    }

    public void AddPlayerToChat(int chatId, int playerId)
    {
      GameChat gameChat = gameChats.FirstOrDefault(gc => gc.Id == chatId);

      if(gameChat != null)
      {
        gameChat.Players.Add(playerId);
      }
    }

    public GameChat CreateGameChat(int gameId, string name = "")
    {
      GameChat gameChat = new GameChat { GameId = gameId, Name = name, Players = new List<int>() };
      if (gameChats.Any())
        gameChat.Id = gameChats.Last().Id + 1;
      else
        gameChat.Id = 1;
      gameChats.Add(gameChat);

      return gameChat;
    }

    public GameChat CreatePrivateChat(int gameId, params int[] playerIds)
    {
      GameChat gameChat = new GameChat { GameId = gameId, IsPrivate = true, Players = playerIds, Name = "" };
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
      var playerChats = gameChats.Where(gc => gc.Players.Contains(playerId));
      foreach(var playerChat in playerChats)
      {
        gameChats.Remove(playerChat);
      }
    }

    public IList<GameChat> GetChatsByGameId(int gameId)
    {
      return gameChats.Where(gc => gc.GameId == gameId).ToList();
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
  }
}
