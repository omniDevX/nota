import { StyleSheet } from "react-native";
import {Inv_Pay} from "../screens/invoice/Inv_Pay";

export const s_inv = StyleSheet.create({
    FloatingBar: {
        position: 'absolute',
        backgroundColor: '#eee', borderRadius: 12,
        paddingVertical: 10, paddingHorizontal: 20,
        flexDirection: 'row', justifyContent: 'space-around', elevation: 6,
        shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10,
        bottom: 20, left: 20, right: 20,
    },
    LogoBox: {
        width: 150,
        height: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SmallInfoText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'right',
    },

    LogoBoxBig: {
        flex: 1,
        width: '105%',
        aspectRatio: 1.5, // Maintain a 3:2 aspect ratio
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },


    Inv_Pay_Icon: {
        backgroundColor: '#2E7D32',
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },


    Inv_Pay_List: {
        backgroundColor: '#f9f9f9', // ✅ Light background (or you can pick a bit darker if you want)
        borderRadius: 8,
        padding: 8,
        marginBottom: 16
    },

    Inv_Pay_List_Item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 3 },


    ItemBox: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 6,
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
    addClientBox: {
        height: 40,
        maxHeight: 160,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'left',
        paddingBottom: 14,
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
