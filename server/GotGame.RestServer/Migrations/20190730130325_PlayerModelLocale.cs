using Microsoft.EntityFrameworkCore.Migrations;

namespace GotGame.RestServer.Migrations
{
    public partial class PlayerModelLocale : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Locale",
                table: "Players",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Locale",
                table: "Players");
        }
    }
}
