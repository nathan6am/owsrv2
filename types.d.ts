interface Event {
  id: number;
  name: String;
  slug: String;
  game: Game;
  league?: League;
  leagueID?: String?;
  startDateTime: Date;
  endDateTime: DateTime;
  sessions: Session[];
}

type Game = "AC" | "AC2" | "ACC" | "IRACING" | "RF2" | "AMS2";
type Role = "ADMIN" | "USER" | "PREMIUM" | "ORGANIZER";
type TeamRole = "OWNER" | "ADMIN" | "MEMBER";

type LicenseClass = "R" | "C" | "B" | "A" | "S";
type SessionType = "PRACTICE" | "QUALIFYING" | "RACE" | "HOTLAP";
