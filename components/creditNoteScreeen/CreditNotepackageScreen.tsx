// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Loader from '../loader/Loader';

const CreditNotePackageScreen = (props) => {
  const [OpeningBalanceAmount,setOpeningBalanceAmount ] = useState('');
  const [PackageNumber, setPackageNumber] = useState('');
  const [RunningAccountBill, setRunningAccountBill] = useState('');
  const [AmountOfCreditNoteUtilization, setAmountOfCreditNoteUtilization] = useState('');
  const [TypeOfUtilization, setTypeOfUtilization] = useState('');
  const [ChallanNo, setChallanNo] = useState('');
  const [ChallanAmount, setChallanAmount] = useState('');
  const [ChallanDepartment, setChallanDepartment] = useState('');
  const [TypeOfChallan, setTypeOfChallan] = useState('');
  const [JEEntry, setJEEntry] = useState('');
  const [DEEntry, setDEEntry] = useState('');
  const [EEEntry, setEEEntry] = useState('');
  const [SEEntry, setSEEntry] = useState('');
  const [CAEntry, setCAEntry] = useState('');
  const [AuditDepartmentEntry, setAuditDepartmentEntry] = useState('');
  const [CurrentBalance, setCurrentBalance] = useState('');
  const [RABillDocument, setRABillDocument] = useState('');
  const [CreditNoteAdjustmentBillDocument, setCurrentNoteAdjustmentBillDocument] = useState('');
  const [Date, setDate] = useState('');
 



  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!OpeningBalanceAmount) {
      alert('Please fill Name');
      return;
    }
    if (!PackageNumber) {
        alert('Please fill Name');
        return;
      } if (!RunningAccountBill) {
        alert('Please fill Name');
        return;
      } if (!AmountOfCreditNoteUtilization) {
        alert('Please fill Name');
        return;
      } if (!TypeOfUtilization) {
        alert('Please fill Name');
        return;
      } if (!ChallanNo) {
        alert('Please fill Name');
        return;
      } if (!ChallanAmount) {
        alert('Please fill Name');
        return;
      } if (!ChallanDepartment) {
        alert('Please fill Name');
        return;
      } if (!TypeOfChallan) {
        alert('Please fill Name');
        return;
      } if (!JEEntry) {
        alert('Please fill Name');
        return;
      } if (!DEEntry) {
        alert('Please fill Name');
        return;
      } if (!EEEntry) {
        alert('Please fill Name');
        return;
      } if (!SEEntry) {
        alert('Please fill Name');
        return;
      } if (!CAEntry) {
        alert('Please fill Name');
        return;
      } if (!AuditDepartmentEntry) {
        alert('Please fill Name');
        return;
      } if (!CurrentBalance) {
        alert('Please fill Name');
        return;
      } if (!RABillDocument) {
        alert('Please fill Name');
        return;
      } if (!CreditNoteAdjustmentBillDocument) {
        alert('Please fill Name');
        return;
      } if (!Date) {
        alert('Please fill Name');
        return;
      }
   
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: OpeningBalanceAmount,
      
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/package', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        
     
 {
    <form>
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Package Number</label>
          <Field type="text" name="Package Number" />
          <ErrorMessage name="name" />

          <label htmlFor="email">Work Name</label>
          <Field type="text" name="Work Name" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Tender Amount</label>
          <Field type="text" name="Tender Amount" />
          <ErrorMessage name="password" />

          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </form>
}
       
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#A9A4C9'}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',

        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/icon.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
          <Text>Flatten Style</Text>

          <pre>
          <pre>
            <TextInput
              style={styles.inputStyle}
              keyboardType='numeric'
              onChangeText={(OpeningBalanceAmount) => setOpeningBalanceAmount(OpeningBalanceAmount)}
              underlineColorAndroid="#f000"
              placeholder="Enter Opening Balance Amount"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
            
            </pre></pre>
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(PackageNumber) => setPackageNumber(PackageNumber)}
              underlineColorAndroid="#f000"
              placeholder="Enter package number"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(RunningAccountBill) => setRunningAccountBill(RunningAccountBill)}
              underlineColorAndroid="#f000"
              placeholder="Enter Running Account Bill"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
  
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(AmountOfCreditNoteUtilization) => setAmountOfCreditNoteUtilization(AmountOfCreditNoteUtilization)}
              underlineColorAndroid="#f000"
              placeholder="Enter Amount Of Credit Note Utilization"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(TypeOfUtilization) => setTypeOfUtilization(TypeOfUtilization)}
              underlineColorAndroid="#f000"
              placeholder="Enter Type Of Utilization"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ChallanNo) => setChallanNo(ChallanNo)}
              underlineColorAndroid="#f000"
              placeholder="Enter Challan No"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ChallanAmount) => setChallanAmount(ChallanAmount)}
              underlineColorAndroid="#f000"
              placeholder="Enter Challan Amount"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ChallanAmount) => setChallanAmount(ChallanAmount)}
              underlineColorAndroid="#f000"
              placeholder="Enter Challan Amount"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(TypeOfChallan) => setChallanAmount(ChallanAmount)}
              underlineColorAndroid="#f000"
              placeholder="Enter Challan Amount"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(JEEntry) => setJEEntry(JEEntry)}
              underlineColorAndroid="#f000"
              placeholder="Enter JE Entry"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(DEEntry) => setDEEntry(DEEntry)}
              underlineColorAndroid="#f000"
              placeholder="Enter DE Entry"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(EEEntry) => setEEEntry(EEEntry)}
              underlineColorAndroid="#f000"
              placeholder="Enter EE Entry"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(SEEntry) => setSEEntry(SEEntry)}
              underlineColorAndroid="#f000"
              placeholder="Enter SE Entry"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(CAEntry) => setCAEntry(CAEntry)}
              underlineColorAndroid="#f000"
              placeholder="Enter CA Entry"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(AuditDepartmentEntry) => setAuditDepartmentEntry(AuditDepartmentEntry)}
              underlineColorAndroid="#f000"
              placeholder="Enter Audit Department Entry"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(CurrentBalance) => setCurrentBalance(CurrentBalance)}
              underlineColorAndroid="#f000"
              placeholder="Enter Current Balance"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(RABillDocument) => setRABillDocument(RABillDocument)}
              underlineColorAndroid="#f000"
              placeholder="Enter RA Bill Document"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(CreditNoteAdjustmentBillDocument) => setCreditNoteAdjustmentBillDocument(CreditNoteAdjustmentBillDocument)}
              underlineColorAndroid="#f000"
              placeholder="Enter Credit Note Adjustment Bill Document"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Data) => setData(Data)}
              underlineColorAndroid="#f000"
              placeholder="Enter Data"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>


          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>package</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default CreditNotePackageScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 30,
    marginLeft: 35,
    marginRight: 85,
    margin: 3,
  },
  buttonStyle: {
    backgroundColor: 'pink',
    borderWidth: 0,
    color: 'pink',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 85,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: '#F2C36B',
    backgroundColor:'white',

  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});