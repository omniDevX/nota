// config/styles.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  inputContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 60,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    height: 60,
    width: 60,
    marginLeft: 10,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  noteCard: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#fdfdfd",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  noteTimestamp: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  noteContent: {
    fontSize: 16,
    color: "#333",
  },
});

export default styles;
