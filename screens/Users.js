// UsersScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Users = ({ navigation }) => {
  const handleFreePlanPress = () => {
    console.log('Free Plan pressed');
  };

  const handlePremiumPlanPress = () => {

    console.log('Premium Plan pressed');
  };

  const handleHistoryPress = () => {

    console.log('History pressed');
  };



  return (
    <View style={styles.container}>
      <Text style={styles.header}>Plans</Text>

      {/* Free Plan Button */}
      <TouchableOpacity
        style={[styles.planButton, { backgroundColor: 'red' }]}
        onPress={handleFreePlanPress}
      >
        <Text style={styles.planButtonText}>Free Plan</Text>
      </TouchableOpacity>

      {/* Premium Plan Button */}
      <TouchableOpacity
        style={[styles.planButton, { backgroundColor: 'blue' }]}
        onPress={handlePremiumPlanPress}
      >
        <Text style={styles.planButtonText}>Premium Plan</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Accounts</Text>



      {/* History Button */}
      <TouchableOpacity style={styles.historyButton} onPress={handleHistoryPress}>
        <Text style={styles.historyButtonText}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E6E6FA', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginRight: 290,
  },
  accountsButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  accountsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  planButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  planButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  historyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Users;
