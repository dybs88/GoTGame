using Microsoft.EntityFrameworkCore.Migrations;

namespace GotGame.RestServer.Migrations
{
    public partial class GameRulesModelUpdate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "CanLookPlayerCard",
                table: "GameRules",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "LargeCastleDefence",
                table: "GameRules",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "SmallCastleDefence",
                table: "GameRules",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CanLookPlayerCard",
                table: "GameRules");

            migrationBuilder.DropColumn(
                name: "LargeCastleDefence",
                table: "GameRules");

            migrationBuilder.DropColumn(
                name: "SmallCastleDefence",
                table: "GameRules");
        }
    }
}
