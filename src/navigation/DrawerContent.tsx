import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { Alert, Image, Linking, Share, Text, TouchableOpacity, View } from 'react-native';

import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

import { s_global } from "@/src/constants";
import { Ionicons } from '@expo/vector-icons';

// Define a more specific type for Ionicons names
type IoniconName = "help-circle-outline" | "sync-outline" | "star-outline" | "gift-outline" | "cloud-upload-outline" | "share-social-outline" | "mail-outline" | "settings-outline";

const CustomDrawerContent = (props: any) => {
    const handleShareApp = async () => {
        try {
            await Share.share({
                message: 'Check out Zen Nota! https://play.google.com/store/apps/details?id=com.aixpertlab.nota&pcampaignid=web_share',
            });
        } catch (error) {
            Alert.alert('Error', 'Could not share app.');
        }
    };

    const handleSignIn = () => {
        props.navigation.navigate('DetailStack', { screen: 'SignInSignUpScreen' });
    };

    const handleRateUs = () => {
        Linking.openURL('market://details?id=com.aixpertlab.nota').catch(() => {
            Alert.alert('Error', 'Could not open app store.');
        });
    };

    const handlePrivacyPolicy = () => {
        Linking.openURL('https://aiautoinvoicing.github.io/pp.html').catch(() => {
            Alert.alert('Error', 'Could not open app store.');
        });
    };

    const handleBackup = () => {
        const dbPath = FileSystem.documentDirectory + 'SQLite/db.db';

        const shareDbFile = async () => {
            const exists = await FileSystem.getInfoAsync(dbPath);
            if (exists.exists) {
                await Sharing.shareAsync(dbPath);
            } else {
                console.log('Database file does not exist.');
            }
        };

        // ✅ Make sure to call the function
        shareDbFile();
    };

    const handleDelete = () => {
        props.navigation.navigate('DetailStack', {
            screen: 'RestoreScreen',
            params: { mode: 'restore_deleted' }
        })
    };

    const handleArchive = () => {
        props.navigation.navigate('DetailStack', {
            screen: 'RestoreScreen',
            params: { mode: 'restore_archived' }
        })
    };

    const handleSupport = () => {
        props.navigation.navigate('DetailStack', { screen: 'SupportHub' });
    };

    const handleContactUs = () => {
        const email = 'aiautoinvoicing@gmail.com';
        const subject = encodeURIComponent('Support Request');
        const body = encodeURIComponent('Hello,\n\nI need help with...');
        const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;

        Linking.openURL(mailtoURL).catch(() => {
            Alert.alert('Error', 'Could not open email client.');
        });
    };

    const statusList = [
        { icon: 'star-outline', label: 'Rate Us', onPress: handleRateUs },
        { icon: 'share-social-outline', label: 'Share App', onPress: handleShareApp },
        { icon: 'mail-outline', label: 'Contact Us', onPress: handleContactUs },
        { icon: 'shield-outline', label: 'Privacy Policy', onPress: handlePrivacyPolicy },
        { icon: 'cafe', label: 'Buy Me a Coffee', onPress: () => Linking.openURL('https://ko-fi.com/aiautoinvoicing'), },
    ];

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={s_global.Drawer_Container}>
            <View style={s_global.Drawer_Header}>
                <Image
                    source={require('@/assets/h.jpg')}
                    style={{ width: 200, height: 60, borderRadius: 32 }}
                    resizeMode="contain"
                />
                <Text style={s_global.Textfff}>Zen Nota</Text>
            </View>


            <View style={{ padding: 10, paddingTop: 10 }}>
                {statusList.map((item, index) => (
                    <React.Fragment key={index}>
                        {/* Divider before "Share App" */}
                        {(item.label === "Archived" || item.label === "Privacy Policy" ) && (
                            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 12 }} />
                        )}
                        <TouchableOpacity style={s_global.DrawerItem} onPress={item.onPress}>
                            <Ionicons name={item.icon as IoniconName} size={20} color="#888" style={{ marginRight: 8 }} />
                            <Text style={s_global.Text888}>{item.label}</Text>
                            <Ionicons name="chevron-forward-outline" size={18} color="#888" />
                        </TouchableOpacity>
                    </React.Fragment>
                ))}
            </View>

            {/* <View style={s_global.DrawerFooter}>
                <TouchableOpacity
                    style={s_global.SettingsButton}
                    onPress={() => {
                        props.navigation.closeDrawer();
                        props.navigation.navigate('DetailStack', { screen: 'Drawer_Settings' });
                    }}
                >
                    <Ionicons name="settings-outline" size={20} color="#888" />
                    <Text style={s_global.Text888}>Settings</Text>
                    <Ionicons name="chevron-forward-outline" size={18} color="#888" style={{ marginRight: 4 }} />
                </TouchableOpacity>
            </View> */}
        </DrawerContentScrollView >
    );
};

export default CustomDrawerContent;
