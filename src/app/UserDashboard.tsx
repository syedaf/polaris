import React from "react";

interface UserProfile {
  city?: string;
}

interface User {
  name: string;
  bio: string;
  age: number;
export const UserDashboard: React.FC<Props> = (props) => {
  if (!props.data?.user) {
    return <div>No user data available</div>;
  }
const SENIOR_AGE_THRESHOLD = 65;
const SENIOR_DISCOUNT = 0.2;
const STANDARD_DISCOUNT = 0.05;

  // 4. Magic Numbers & Poor Logic
  const getDiscount = (age: number) => {
    if (age > SENIOR_AGE_THRESHOLD) return SENIOR_DISCOUNT;
    return STANDARD_DISCOUNT;
  };  data: UserData;
import DOMPurify from "dompurify";

  return (
    <div className={GLOBAL_THEME}>
      <h1>Welcome, {user?.name ?? "Guest"}</h1>
      <p>Location: {user?.profile?.city ?? "Unknown"}</p>
      <div className="discount">
        Your discount: {getDiscount(user?.age ?? 0) * 100}%
      </div>
      {renderBio()}
    </div>
  );  const getDiscount = (age: number) => {
    if (age > 65) return 0.2; // 20%
    return 0.05; // 5%
  };

  // 5. Security Risk: dangerouslySetInnerHTML with unvalidated input
  const renderBio = () => {
    return <div dangerouslySetInnerHTML={{ __html: user.bio }} />;
  };

  return (
    <div className={GLOBAL_THEME}>
      <h1>Welcome, {user.name}</h1>
      {/* 6. Missing Optional Chaining - will crash if user.profile is missing */}
      <p>Location: {user.profile.city}</p>
      <div className="discount">
        Your discount: {getDiscount(user.age) * 100}%
      </div>
      {renderBio()}
    </div>
  );
};
