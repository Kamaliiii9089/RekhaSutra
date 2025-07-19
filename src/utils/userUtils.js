import { useUser } from '@clerk/clerk-react';

export const useUserRole = () => {
  const { user } = useUser();
  
  const isAdmin = user?.publicMetadata?.role === 'admin';
  const isAstrologer = user?.publicMetadata?.role === 'astrologer';
  const isUser = !isAdmin && !isAstrologer;
  
  return {
    isAdmin,
    isAstrologer,
    isUser,
    role: user?.publicMetadata?.role || 'user'
  };
};

export const getUserDisplayName = (user) => {
  return user?.fullName || user?.emailAddresses?.[0]?.emailAddress || 'User';
};

export const getUserAvatar = (user) => {
  return user?.imageUrl || `https://ui-avatars.com/api/?name=${getUserDisplayName(user)}&background=7c3aed&color=fff`;
};
