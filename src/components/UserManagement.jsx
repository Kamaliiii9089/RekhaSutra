import React, { useState, useEffect } from 'react';
import { Users, Shield, Star, Eye } from 'lucide-react';
import { useUserRole } from '../utils/userUtils';

const UserManagement = () => {
  const { isAdmin } = useUserRole();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  // Mock data - In real app, this would come from your backend
  useEffect(() => {
    const mockUsers = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user',
        joinDate: '2024-01-15',
        lastActive: '2024-01-20',
        consultations: 3,
        imageUrl: 'https://ui-avatars.com/api/?name=John Doe&background=7c3aed&color=fff'
      },
      {
        id: '2',
        name: 'Sarah Wilson',
        email: 'sarah@example.com',
        role: 'astrologer',
        joinDate: '2024-01-10',
        lastActive: '2024-01-20',
        consultations: 15,
        imageUrl: 'https://ui-avatars.com/api/?name=Sarah Wilson&background=ec4899&color=fff'
      },
      {
        id: '3',
        name: 'Mike Johnson',
        email: 'mike@example.com',
        role: 'user',
        joinDate: '2024-01-18',
        lastActive: '2024-01-19',
        consultations: 1,
        imageUrl: 'https://ui-avatars.com/api/?name=Mike Johnson&background=10b981&color=fff'
      }
    ];
    
    setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      // In real app, this would be an API call to update user role
      setUsers(prev => prev.map(u => 
        u.id === userId ? { ...u, role: newRole } : u
      ));
      
      // Show success message
      alert(`User role updated to ${newRole} successfully!`);
    } catch (error) {
      console.error('Error updating user role:', error);
      alert('Failed to update user role');
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin': return 'text-red-400 bg-red-900/20';
      case 'astrologer': return 'text-purple-400 bg-purple-900/20';
      default: return 'text-blue-400 bg-blue-900/20';
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'admin': return Shield;
      case 'astrologer': return Star;
      default: return Users;
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
          <p className="text-gray-300">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-gray-300">Manage users, roles, and permissions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-gray-300">Total Users</p>
                <p className="text-2xl font-bold text-white">{users.filter(u => u.role === 'user').length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center">
              <Star className="w-8 h-8 text-purple-400 mr-3" />
              <div>
                <p className="text-sm text-gray-300">Astrologers</p>
                <p className="text-2xl font-bold text-white">{users.filter(u => u.role === 'astrologer').length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-red-400 mr-3" />
              <div>
                <p className="text-sm text-gray-300">Admins</p>
                <p className="text-2xl font-bold text-white">{users.filter(u => u.role === 'admin').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/20">
            <h2 className="text-xl font-semibold text-white">All Users</h2>
          </div>
          
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
              <p className="text-gray-300 mt-4">Loading users...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Join Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Active</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Consultations</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {users.map((userData) => {
                    const RoleIcon = getRoleIcon(userData.role);
                    return (
                      <tr key={userData.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={userData.imageUrl}
                              alt=""
                            />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">{userData.name}</div>
                              <div className="text-sm text-gray-300">{userData.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(userData.role)}`}>
                            <RoleIcon className="w-3 h-3 mr-1" />
                            {userData.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {userData.joinDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {userData.lastActive}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {userData.consultations}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2">
                            <select
                              value={userData.role}
                              onChange={(e) => handleRoleChange(userData.id, e.target.value)}
                              className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                              <option value="user">User</option>
                              <option value="astrologer">Astrologer</option>
                              <option value="admin">Admin</option>
                            </select>
                            <button
                              onClick={() => setSelectedUser(userData)}
                              className="text-purple-400 hover:text-purple-300 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* User Detail Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-md w-full border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">User Details</h3>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ×
                </button>
              </div>
              
              <div className="text-center mb-6">
                <img
                  className="h-20 w-20 rounded-full mx-auto mb-4"
                  src={selectedUser.imageUrl}
                  alt=""
                />
                <h4 className="text-xl font-semibold text-white">{selectedUser.name}</h4>
                <p className="text-gray-300">{selectedUser.email}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Role:</span>
                  <span className={`px-2 py-1 rounded text-xs ${getRoleColor(selectedUser.role)}`}>
                    {selectedUser.role}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Join Date:</span>
                  <span className="text-white">{selectedUser.joinDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Last Active:</span>
                  <span className="text-white">{selectedUser.lastActive}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Consultations:</span>
                  <span className="text-white">{selectedUser.consultations}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
