// styles/styles.ts

import { StyleSheet } from "react-native";
import { grey100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#333",
    },
    invoce_number: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#333",
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 16,
        color: "grey",
    },
    Card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    invoiceClient_old: {
        fontSize: 18,
        fontWeight: "600",
        color: "#222",
        marginBottom: 4,
    },

    invoiceClient: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        overflow: 'hidden',
    },

    invoiceAmount: {
        fontSize: 16,
        color: "#0a7",
        marginBottom: 4,
    },
    invoiceNotes: {
        fontSize: 14,
        color: "#aaa",
    },
    fab: {
        position: "absolute",
        right: 16,
        bottom: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "#007bff",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    fabText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    emptyText: {
        fontSize: 16,
        color: "#999",
        marginTop: 40,
        textAlign: "center",
    },
    formGroup: {
        marginBottom: 16,
        width: "100%",
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginBottom: 6,
    },
    notesInput: {
        height: 100,
        textAlignVertical: "top",
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

    input2: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginVertical: 10,
        fontSize: 16,
        backgroundColor: "#fff",
        color: "#333",
    },

    input: {
        fontSize: 14,
        paddingVertical: 8,
        color: "#333",
    },

    input_grey: {
        fontSize: 14,
        paddingVertical: 4,
        color: "#aaa",
    },


    divider: {
        height: 1,
        backgroundColor: "#eee",
        marginVertical: 6,
    },

    divider_screen: {
        height: 1,
        backgroundColor: "#eee",
        marginVertical: 6,
        marginHorizontal: -16,
    },

    inlineField: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },

    inlineLabel: {
        fontSize: 16,
        color: "#333",
        width: 120, // or use flexBasis/flexGrow for responsive
    },

    inlineInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 16,
    },

    invoice_container: {
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 0,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
        marginBottom: 16,
    },

    invoice_chocolate: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
    },

    clientSelector: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        marginLeft: 8,
    },

    clientText: {
        fontSize: 16,
        color: "#000",
    },

    arrow: {
        fontSize: 18,
        color: "#888",
        paddingLeft: 8,
    },
    separator: {
        height: 1,
        backgroundColor: "#eee",
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
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cardText: {
        flex: 1,
        marginRight: 8, // space from the 3-dot icon
    },


    invoicePrice: {
        fontSize: 14,
        textAlign: 'right',
        flexShrink: 0,
        marginLeft: 10, // prevent hugging
    },
});


export const modalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 16,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        maxHeight: '70%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    itemRow: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    addNewButton: {
        marginTop: 16,
        flexDirection: 'row',
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addNewText: {
        color: '#fff',
        marginLeft: 6,
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 12,
        alignItems: 'center',
    },
    confirmButton: {
        backgroundColor: '#007aff',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    confirmButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});




export const invoiceStyles = StyleSheet.create({
    sectionBox: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        paddingRight: 6,
        alignItems: 'center',
        marginBottom: 16,
    },
    addText: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    invoiceInfoBox: {
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingTop: 16,
        marginTop: 8,
    },
    invoiceInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    value: {
        fontWeight: 'bold',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    inputText: {
        paddingVertical: 2,
        color: "#aaa",
    },
    logoBox: {
        width: 150,
        height: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    addClientBox: {
        height: 40,
        maxHeight: 120,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallInfoText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'right',
    },
    smallText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'left',
    },
    clientName: {
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 2,
    },
    
    clientDetail: {
        fontSize: 12,
        color: "#555",
    },
    Card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

});
