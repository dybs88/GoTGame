import { GameBoardViewSettingsService } from "./../../infrastructure/services/gameBoardViewSettings.service";

export interface SettingComponent {
  settings: GameBoardViewSettingsService;

  refreshSettings();
}
