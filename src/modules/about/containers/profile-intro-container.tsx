import { ProfileIntro } from "../components/profile-intro";
import { profileData } from "../data/profile.data";

export function ProfileIntroContainer() {
  return <ProfileIntro profile={profileData} />;
}
