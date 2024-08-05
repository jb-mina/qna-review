// pages/profile/index.js
import Profile from "@/components/Profile";

export default function ProfilePage() {
  // TODO: Fetch user data from API
  const user = { name: "John Doe", email: "john@example.com" };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <Profile user={user} />
    </div>
  );
}
