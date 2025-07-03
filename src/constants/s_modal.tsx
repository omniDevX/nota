import { StyleSheet } from "react-native";

export const s_modal = StyleSheet.create({
    // Overlay and container
    ModalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    ModalContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 10,
        alignItems: 'stretch',
    },    
    TemplateModalContainer: {
        backgroundColor: '#fff',
        width: '98%',
        borderRadius: 16,
        padding: 6,
        alignItems: 'center',
    },

    ClearButton: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
    },

    ClearButtonText: {
        color: "#444",
        fontSize: 14,
        fontWeight: "500",
    },


    // Title and sections
    ModalTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16,
    },
    ModalSection: {
        width: '100%',
        marginBottom: 20,
    },
    ModalLabel: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 6,
    },
    ModalInput: {
        backgroundColor: '#F5F5F5',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        width: '100%',
    },
    ModalPicker: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        backgroundColor: '#F5F5F5',
        marginTop: 8,
    },

    // Actions
    ModalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    ModalButton: {
        flex: 1,
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    ModalButtonCancelText: {
        fontWeight: '600',
        color: '#333',
    },
    ModalButtonCancel: {
        backgroundColor: '#F0F0F0',
    },
    ModalButtonConfirm: {
        backgroundColor: '#007BFF',
    },
    ModalButtonConfirmText: {
        fontWeight: '600',
        color: '#fff',
    },
    ModalButtonDelete: {
        backgroundColor: '#DC3545', // Bootstrap's red
    },
    ModalButtonDeleteText: {
        fontWeight: '600',
        color: '#fff',
    },
    ModalText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
    },

});
