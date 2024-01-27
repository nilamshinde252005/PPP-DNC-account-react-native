// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView, Platform, Settings, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SettingsScreen from '../settingsScreen/SettingsScreen';
import PackageScreen from '../packageScreen/PackageScreen';
import CreditNoteScreen from '../creditNoteScreen/CreditNoteScreen';
import ReportScreen from '../reportScreen/ReportScreen';
import styles from '../../components/styles';

import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    List,
    Headline,
  } from 'react-native-paper';

const Tab =createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: "#fff"
    }
}

const packagesData = [
    {
        packageNumber: 1,
        workName: 'खराडी भाग',
        tenderAmount: 100,
        resolutionNumber: 123,
        workOrderNumber: 1234,
        contractor: 'testContractor',
        raBillNumber: 122,
        contractAmout: 80,
        updatedWorkValue: 120,
        juniorEnggName: 'testJE',
        juniorEnggEmpCode: 1,
        deputyEnggName: 'testDE',
        deputyEnggEmpCode: 2,
        executiveEnggName: 'testEE',
        executiveEnggEmpCode: 3,
        workType: 1,  // road/riverBridge/Flyover/underpass
        length: '1.2m',
        width: '2.5m',
        consultantName: 'testConsultant',
        consultantWorkOrder: 12,
        consultantStandingCommitteeResolution: 12345,
        consultantRABill: 1234,
        consultantUpdatedWorkValue: 40,
        percentageQuoteConsultant: 5,
        percentageQuoteContractor: 10,
        dateTime: '15.01.2024',
        remarks: ''
    },
    {
        packageNumber: 2,
        workName: 'खराडी ते मुंढवा मुळा मुठा पुल',
        tenderAmount: 100,
        resolutionNumber: 123,
        workOrderNumber: 1234,
        contractor: 'testContractor',
        raBillNumber: 122,
        contractAmout: 80,
        updatedWorkValue: 120,
        juniorEnggName: 'testJE',
        juniorEnggEmpCode: 1,
        deputyEnggName: 'testDE',
        deputyEnggEmpCode: 2,
        executiveEnggName: 'testEE',
        executiveEnggEmpCode: 3,
        workType: 1,  // road/riverBridge/Flyover/underpass
        length: '1.2m',
        width: '2.5m',
        consultantName: 'testConsultant',
        consultantWorkOrder: 12,
        consultantStandingCommitteeResolution: 12345,
        consultantRABill: 1234,
        consultantUpdatedWorkValue: 40,
        percentageQuoteConsultant: 5,
        percentageQuoteContractor: 10,
        dateTime: '15.01.2024',
        remarks: ''
    }
];

const creditNotesData = [
    {
        packageNumber: 1,
        openingBalanceAmount: 1000,
        runningACBill: 100,
        creditNoteUtilizationAmount: 123,
        utilizationType: 1, //Self or transfer
        contractor: 'testContractor',
        challanNumber: [1,2],
        challanAmout: 800,
        challanDepartment: '',
        typeOfChallan: 1, //partial or full
        juniorEnggName: 'testJE',
        juniorEnggEmpCode: 1,
        deputyEnggName: 'testDE',
        deputyEnggEmpCode: 2,
        executiveEnggName: 'testEE',
        executiveEnggEmpCode: 3,
        superintendentEnggName: 'testSE',
        superintendentEnggEmpCode: 4,
        chiefEnggName: 'testCE',
        chiefEnggEmpCode: 5,
        auditClerkName: '',
        adminOfficerName: '',
        chiefAccountantName: '',
        creditNoteCurrentBalance: 100,
        raBillDocument: '',
        creditNoteAdjustmentBillDocument: '',
        dateTime: '',
        remarks: ''
    },
    {
        packageNumber: 1,
        openingBalanceAmount: 1000,
        runningACBill: 100,
        creditNoteUtilizationAmount: 123,
        utilizationType: 1, //Self or transfer
        contractor: 'testContractor',
        challanNumber: [1,2],
        challanAmout: 800,
        challanDepartment: '',
        typeOfChallan: 1, //partial or full
        juniorEnggName: 'testJE',
        juniorEnggEmpCode: 1,
        deputyEnggName: 'testDE',
        deputyEnggEmpCode: 2,
        executiveEnggName: 'testEE',
        executiveEnggEmpCode: 3,
        superintendentEnggName: 'testSE',
        superintendentEnggEmpCode: 4,
        chiefEnggName: 'testCE',
        chiefEnggEmpCode: 5,
        auditClerkName: '',
        adminOfficerName: '',
        chiefAccountantName: '',
        creditNoteCurrentBalance: 100,
        raBillDocument: '',
        creditNoteAdjustmentBillDocument: '',
        dateTime: '',
        remarks: ''
    }
];

const HomeScreen = () => {
    const [packages, setPackages] = useState([]);
    const [creditNotes, setCreditNotes] = useState([]);

    const fetchPackages = async () => {
        /* const response = await fetch(
           `https://kriss.io/wp-json/wp/v2/packages?per_page=5`,
        ); */
        // const packages = await response.json();
        const packages = packagesData;
        console.log('data:' + JSON.stringify(packages))
        // packages = packagesData;
        setPackages(packages);
    }

    const fetchCreditNotes = async () => {
        /* const response = await fetch(
           `https://kriss.io/wp-json/wp/v2/packages?per_page=5`,
        ); */
        // const packages = await response.json();
        const creditNotes = creditNotesData;
        // packages = creditNotesData;
        setCreditNotes(creditNotes);
    }

    useEffect(() => {
        fetchPackages();
        fetchCreditNotes();
        console.log('useEffect:' + JSON.stringify(creditNotes))
    }, [packages])

    return (
        <SafeAreaView style={{flex: 1}}>
        <Text
            style={styles.titleTextStyle}>
            पीपीपी अंतर्गत प्रस्तावित कामे (Packages)
        </Text>
        <FlatList 
            style={{
                flexGrow: 0,
                marginBottom: 10
            }} 
            data={packages}
            renderItem={({ item }) => (
                <Card
                    style={{
                        shadowOffset: { width: 5, height: 5 },
                        width: '90%',
                        borderRadius: 12,
                        alignSelf: 'center',
                        marginBottom: 10,
                    }}>
                    <Card.Content>
                    <SafeAreaView style={{flex: 1}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text
                            style={styles.cardTitleTextStyle}>
                            काम: {item.packageNumber}
                        </Text>
                        <Text
                            style={{paddingLeft: 100, alignContent: 'right'}}>
                            वर्कऑर्डर दि: {item.dateTime}
                        </Text>
                        </View>
                        <Text
                            style={styles.cardTitleTextStyle}>
                            कामाचे नाव: {item.workName}
                        </Text>
                        
                        <Text
                            style={styles.cardTitleTextStyle}>
                            ठेकेदाराचे नाव: {item.contractor}
                        </Text>

                        <Text
                            style={styles.cardTitleTextStyle}>
                            टेंडर र.रू., कोटीत: {item.tenderAmount}
                        </Text>
                        
                    </SafeAreaView>
                    </Card.Content>
                </Card>
                
            )}
            keyExtractor={(item, index) => index.toString()}
        />
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 2,
                marginHorizontal: 10
            }}
        />

        <Text
            style={styles.titleTextStyle}>
            पीपीपी अंतर्गत क्रेडिट नोट (Credit Notes)
        </Text>
        <FlatList 
            style={{
                flexGrow: 0,
                marginBottom: 10
            }} 
            data={creditNotes}
            renderItem={({ item }) => (
                <Card
                    style={{
                        shadowOffset: { width: 5, height: 5 },
                        width: '90%',
                        borderRadius: 12,
                        alignSelf: 'center',
                        marginBottom: 10,
                    }}>
                    <Card.Content>
                    <SafeAreaView style={{flex: 1}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text
                            style={styles.cardTitleTextStyle}>
                            काम: {item.packageNumber}
                        </Text>
                        <Text
                            style={{paddingLeft: 100, alignContent: 'right'}}>
                            क्रेडिट नोट दि: {item.dateTime}
                        </Text>
                        </View>
                        
                        <Text
                            style={styles.cardTitleTextStyle}>
                            Opening balance रू. कोटीत: {item.openingBalanceAmount}
                        </Text>

                        <Text
                            style={styles.cardTitleTextStyle}>
                            कामाचे नाव: {item.workName}
                        </Text>
                        
                        <Text
                            style={styles.cardTitleTextStyle}>
                            ठेकेदाराचे नाव: {item.contractor}
                        </Text>
                        
                    </SafeAreaView>
                    </Card.Content>
                </Card>
                
            )}
            keyExtractor={(item, index) => index.toString()}
        />
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 2,
                marginHorizontal: 10
            }}
        />
        </SafeAreaView>
    );
};

export default HomeScreen;