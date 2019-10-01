using Microsoft.EntityFrameworkCore.Migrations;

namespace GotGame.RestServer.Migrations.IdentityContextDbMigrations
{
    public partial class UserModelDefaultPlayerId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DefaultPlayerId",
                schema: "Security",
                table: "Users",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DefaultPlayerId",
                schema: "Security",
                table: "Users");
        }
    }
}
