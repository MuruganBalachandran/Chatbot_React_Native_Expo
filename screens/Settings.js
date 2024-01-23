import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Switch,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Settings = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedLocation, setSelectedLocation] = useState("India");
  const [dataSaver, setDataSaver] = useState(false);
  const [username, setUsername] = useState("JohnDoe");
  const [password, setPassword] = useState("********");
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleDataSaver = () => {
    setDataSaver(!dataSaver);
  };

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handlecleardata = () => {
    console.log("Implement logic to clear data");
  };

  const handleLogout = () => {
    navigation.navigate("Chatbot");
  };

  const handleSaveChanges = () => {
    console.log("Implement logic to save changes");
  };

  const handleAbout = () => {
    setShowAboutModal(true);
  };

  const handleHelp = () => {
    setShowHelpModal(true);
  };

  const closeAboutModal = () => {
    setShowAboutModal(false);
  };

  const closeHelpModal = () => {
    setShowHelpModal(false);
  };

  const renderAboutModalContent = () => (
    <View style={styles.modalContent}>
      <Text style={styles.modalHeader}>About Me</Text>
      <Text>This is some text about me. Feel free to customize it!</Text>
      <TouchableOpacity onPress={closeAboutModal}>
        <Text style={styles.modalCloseButton}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHelpModalContent = () => (
    <View style={styles.modalContent}>
      <Text style={styles.modalHeader}>Help</Text>
      <Text>Need assistance? Here's some help content for your application.</Text>
      <TouchableOpacity onPress={closeHelpModal}>
        <Text style={styles.modalCloseButton}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.line}></View>

      <View style={styles.settingRow}>
        <Text>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
      <View style={styles.line}></View>

      <View style={styles.settingRow}>
        <Text>Data History</Text>
        <Switch value={dataSaver} onValueChange={toggleDataSaver} />
      </View>

      <TouchableOpacity
        style={styles.cleardataButton}
        onPress={handlecleardata}
      >
        <Text style={styles.actionButtonText}>Clear data</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>

      <Text style={styles.sectionHeader}>App Settings</Text>
      <View style={styles.settingRow}>
        <Text>Language</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Spanish" value="Spanish" />
          <Picker.Item label="French" value="French" />
          <Picker.Item label="German" value="German" />
          <Picker.Item label="Chinese" value="Chinese" />
          <Picker.Item label="Japanese" value="Japanese" />
          <Picker.Item label="Korean" value="Korean" />
          <Picker.Item label="Arabic" value="Arabic" />
          <Picker.Item label="Russian" value="Russian" />
          <Picker.Item label="Portuguese" value="Portuguese" />
          <Picker.Item label="Italian" value="Italian" />
        </Picker>

        <Text style={styles.selectedLanguage}>{selectedLanguage}</Text>
      </View>
      <View style={styles.line}></View>

      <View style={styles.settingRow}>
        <Text>Location</Text>
        <Picker
          selectedValue={selectedLocation}
          onValueChange={(itemValue) => setSelectedLocation(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="US" value="US" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="Canada" value="Canada" />
          <Picker.Item label="Australia" value="Australia" />
          <Picker.Item label="Germany" value="Germany" />
          <Picker.Item label="Brazil" value="Brazil" />
          <Picker.Item label="Japan" value="Japan" />
          <Picker.Item label="South Africa" value="South Africa" />
          <Picker.Item label="Mexico" value="Mexico" />
          <Picker.Item label="France" value="France" />
          <Picker.Item label="Italy" value="Italy" />
        </Picker>
        <Text style={styles.selectedLocation}>{selectedLocation}</Text>
      </View>
      <View style={styles.line}></View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Account Settings</Text>
        <View style={styles.settingRow}>
          <Text>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={handleUsernameChange}
          />
        </View>

        <View style={styles.settingRow}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry
          />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

      <View style={styles.line}></View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={handleAbout}>
        <Text style={styles.actionButtonText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={handleHelp}>
        <Text style={styles.actionButtonText}>Help</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showAboutModal}
        onRequestClose={closeAboutModal}
      >
        <View style={styles.modalContainer}>{renderAboutModalContent()}</View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showHelpModal}
        onRequestClose={closeHelpModal}
      >
        <View style={styles.modalContainer}>{renderHelpModalContent()}</View>
      </Modal>

      <View style={{ height: 20 }}></View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 35,
    backgroundColor: "#E6E6FA", // Light violet background color
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  picker: {
    height: 30,
    width: "45%",
  },
  selectedLanguage: {
    fontSize: 16,
    color: "#555",
    marginLeft: 8,
  },
  selectedLocation: {
    fontSize: 16,
    color: "#555",
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    width: "70%",
  },
  saveButton: {
    backgroundColor: "#A0A0A0",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginLeft: 80,
    marginRight: 80,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginLeft: 80,
    marginRight: 80,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  actionButton: {
    backgroundColor: "#007BFF",
    padding: 5,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginRight: 170,
  },
  cleardataButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 80,
    marginRight: 80,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalCloseButton: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default Settings;
