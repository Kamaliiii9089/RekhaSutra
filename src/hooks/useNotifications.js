import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      setNotifications([]);
      setIsLoading(false);
      return;
    }

    // Simulate fetching notifications from an API
    const fetchNotifications = async () => {
      try {
        setIsLoading(true);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock notifications data based on user activity
        const mockNotifications = [
          {
            id: 1,
            type: 'service_update',
            title: 'Palm Reading Complete',
            message: 'Your palm reading analysis is ready to view',
            timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
            isRead: false,
            priority: 'high'
          },
          {
            id: 2,
            type: 'consultation_reminder',
            title: 'Upcoming Consultation',
            message: 'Your astrology consultation is scheduled for tomorrow at 3 PM',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
            isRead: false,
            priority: 'medium'
          },
          {
            id: 3,
            type: 'offer',
            title: 'Special Offer',
            message: '20% off on your next consultation session',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
            isRead: true,
            priority: 'low'
          }
        ];

        // Filter notifications based on user preferences or activity
        const userNotifications = mockNotifications.filter(notification => {
          // Add logic to filter notifications based on user's service usage
          return true;
        });

        setNotifications(userNotifications);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setNotifications([]);
        setIsLoading(false);
      }
    };

    fetchNotifications();

    // Set up real-time notification updates (you can integrate with WebSocket or polling)
    const notificationInterval = setInterval(fetchNotifications, 5 * 60 * 1000); // Refresh every 5 minutes

    return () => {
      clearInterval(notificationInterval);
    };
  }, [user]);

  const unreadCount = notifications.filter(notification => !notification.isRead).length;

  const markAsRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const deleteNotification = (notificationId) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== notificationId)
    );
  };

  return {
    notifications,
    unreadCount,
    isLoading,
    markAsRead,
    markAllAsRead,
    deleteNotification
  };
};
