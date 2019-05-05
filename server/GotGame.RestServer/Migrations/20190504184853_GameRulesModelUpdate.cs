using Microsoft.EntityFrameworkCore.Migrations;

namespace GotGame.RestServer.Migrations
{
    public partial class GameRulesModelUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "MercenaryAvaible",
                table: "GameRules",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MercenaryAvaible",
                table: "GameRules");
        }
    }
}
