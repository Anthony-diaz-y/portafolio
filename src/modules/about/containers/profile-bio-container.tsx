import { ProfileBio } from "../components/profile-bio";
import { profileData } from "../data/profile.data";

export function ProfileBioContainer() {
  return <ProfileBio profile={profileData} />;
}
