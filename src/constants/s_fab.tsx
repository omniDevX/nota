import { StyleSheet } from "react-native";
import { colors } from "./colors";


export const s_fab = StyleSheet.create({
    fabGeneral: {
        flexDirection: 'row',
        backgroundColor: colors.main,
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 30,
        elevation: 5,
    },

    menuText: {
        color: '#ddd',
        fontWeight: '600',
    },


    fabText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    fabContainer: {
        position: "absolute",
        bottom: 20,
        right: 20,
        alignItems: "flex-end",
    },

    fabSmall: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#007bff",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },

    fabMenu: {
        marginBottom: 10,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        width: 180,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },

    fabMenuItem: {
        paddingVertical: 8,
        fontSize: 16,
        color: "#333",
    },

    fabButton: {
        position: "absolute",
        bottom: 20,
        right: 12,
        alignSelf: "flex-end",
        backgroundColor: "#FAAB1A",
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8,
    },

    fab_button_new_client: {
        position: "absolute",
        bottom: 20,
        right: 12,
        alignSelf: "flex-end",
        backgroundColor: "#009688",
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8,
    },
    fab_save: {
        position: "absolute",
        bottom: 24,
        right: 24,
        backgroundColor: "#2e7d32",
        borderRadius: 32,
        paddingVertical: 12,
        paddingHorizontal: 20,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    fab_save_text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    
});


