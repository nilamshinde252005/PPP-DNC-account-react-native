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

const packageScreen = (props) => {
  const [PackageNumber, setPackageNumber] = useState('');
  const [WorkName, setWorkName] = useState('');
  const [ResolutionNumber, setResolutionNumber] = useState('');//?
  const [WorkOrderNumber, setWorkOrderNumber] = useState('');
  const [TenderAmount, setTenderAmount] = useState('');
  const [RaBillNumber, setRaBillNumber] = useState('');
  const [ContractAmout, setContractAmout] = useState('');
  const [UpdatedWorkValue, setUpdatedWorkValue] = useState('');
  const [JuniorEnggName, setJuniorEnggName] = useState('');
  const [JuniorEnggEmpCode, setJuniorEnggEmpCode] = useState('');
  const [DeputyEnggName, setDeputyEnggName] = useState('');
  const [DeputyEnggEmpCode, setDeputyEnggEmpCode] = useState('');
  const [ExecutiveEnggName, setExecutiveEnggName] = useState('');
  const [ExecutiveEnggEmpCode, setExecutiveEnggEmpCode] = useState('');
  const [ConsultantName, setConsultantName] = useState('');
  const [ConsultantWorkOrder, setConsultantWorkOrder] = useState('');
  const [WorkType, setWorkType] = useState('');
  const [ConsultantStandingCommitteeResolution, setConsultantStandingCommitteeResolution] = useState('');
  const [ConsultantRaBill, setConsultantRaBill] = useState('')
  const [ConsultantUpdatedWorkValue, setConsultantUpdatedWorkValue] = useState('');
  const [PercentageQuoteConsultant, setPercentageQuoteConsultant] = useState('');
  const [PercentageQuoteContractor, setPercentageQuoteContractor] = useState('');
  const [DateTime, setDateTime] = useState('');
  const [Remarks, setRemarks] = useState('');
  const [Contractor, setContractor] = useState('');

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
    if (!PackageNumber) {
      alert('Please fill Name');
      return;
    }
    if (!WorkName) {
      alert('Please fill Email');
      return;
    }
    if (!WorkOrderNumber) {
      alert('Please fill Address');
      return;
    }
    if (!TenderAmount) {
      alert('Please fill Password');
      return;
    }
    if (!Contractor) {
        alert('Please fill Name');
        return;
    }
    if (!RaBillNumber) {
        alert('Please fill Name');
        return;
      }
      if (!ContractAmout) {
        alert('Please fill Name');
        return;
    }
    if (!UpdatedWorkValue) {
        alert('Please fill Name');
        return;
    }
    if ( JuniorEnggName) {
        alert('Please fill Name');
        return;
    }
    if (!JuniorEnggEmpCode) {
        alert('Please fill Name');
        return;
    }
    if (!DeputyEnggName) {
        alert('Please fill Name');
        return;
    }
    if (!DeputyEnggEmpCode) {
        alert('Please fill Name');
        return;
    }  
    
    if (!ExecutiveEnggName) {
        alert('Please fill Name');
        return;
    }
    if (!ExecutiveEnggEmpCode) {
        alert('Please fill Name');
        return;
    }
    if (!ConsultantName) {
        alert('Please fill Name');
        return;
    }
    if (!ConsultantWorkOrder) {
        alert('Please fill Name');
        return;
    }
    if (!WorkType) {
        alert('Please fill Name');
        return;
    }
    if (!ConsultantStandingCommitteeResolution) {
        alert('Please fill Name');
        return;
    }
    if (!ConsultantRaBill) {
        alert('Please fill Name');
        return;
    }
    if (!PercentageQuoteConsultant) {
        alert('Please fill Name');
        return;
    }
    if (!ConsultantUpdatedWorkValue) {
        alert('Please fill Name');
        return;
    }
    if (!PercentageQuoteConsultant) {
        alert('Please fill Name');
        return;
    }
    if (!PercentageQuoteContractor) {
        alert('Please fill Name');
        return;
    }
    if (!DateTime) {
        alert('Please fill Name');
        return;
    }
    if (!Remarks) {
        alert('Please fill Name');
        return;
    }
    if (!ResolutionNumber) {
        alert('Please fill Age');
        return;
      }
   

    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: PackageNumber,
      email: WorkName,
      age: ResolutionNumber,
      address: WorkOrderNumber,
      password: TenderAmount,
      contractor:Contractor
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
        
        <Formik>
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />

          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />

          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
       
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
            </pre></pre>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Contractor) => setContractor(Contractor)}
              underlineColorAndroid="#f000"
              placeholder=" Enter contractor"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(TenderAmount) =>setTenderAmount(TenderAmount) }
              underlineColorAndroid="#f000"
              placeholder=" Enter Tender Amount"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current &&
                ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(RaBillNumber) => setRaBillNumber(RaBillNumber)}
              underlineColorAndroid="#f000"
              placeholder=" Enter RaBilNumber"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(WorkName) => setWorkName(WorkName)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Work Name"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(WorkOrderNumber) =>setWorkOrderNumber(WorkOrderNumber)}
              underlineColorAndroid="#f000"
              placeholder="Enter Work Order Number"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              ref={addressInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ContractAmout) => setContractAmout(ContractorAmout)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Contractor Amout"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UpdatedWorkValue) => setUpdatedWorkValue(UpdatedWorkValue)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Updated Work Value"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(JuniorEnggName) => setJuniorEnggName(JuniorEnggName)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Junior Engg Name"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(JuniorEnggEmpCode) => setJuniorEnggEmpCode(JuniorEnggEmpCode)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Junior Engg Emp Code"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(DeputyEnggName) => setDeputyEnggName(DeputyEnggName)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Deputy Engg Name"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(DeputyEnggEmpCode) => setDeputyEnggEmpCode(DeputyEnggEmpCode)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Deputy Engg Emp Code"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ExecutiveEnggName) => setExecutiveEnggName(ExecutiveEnggName)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Executive Engg Name"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ExecutiveEnggEmpCode) => setExecutiveEnggEmpCode(ExecutiveEnggEmpCode)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Executive Engg Emp Code"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ConsultantName) => setConsultantName(ConsultantName)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Consultant Name"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ConsultantWorkOrder) => setConsultantWorkOrder(ConsultantWorkOrder)}
              underlineColorAndroid="#f000"
              placeholder=" Enter  Consultant Work Order"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(WorkType) => setWorkType(WorkType)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Work Type"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ConsultantStandingCommitteeResolution) => setConsultantStandingCommitteeResolution(ConsultantStandingCommitteeResolution)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Consultant Standing Committee Resolution"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ConsultantRaBill) => setConsultantRaBill(ConsultantRaBill)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Consultant RABill"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(PercentageQuoteConsultant) => setConsultantUpdatedWorkValue(ConsultantUpdatedWorkValue)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Consultant Updated Work Value"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(PercentageQuoteConsultant) => setPercentageQuoteConsultant(PercentageQuoteConsultant)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Percentage Quote Consultant"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(PercentageQuoteContractor) => setPercentageQuoteContractor(PercentageQuoteContractor)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Percentage Quote Contractor"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(DateTime) => setDateTime(DateTime)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Date Time"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Remarks) => setRemarks(Remarks)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Remarks"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(ResolutionNumber) => setResolutionNumber(ResolutionNumber)}
              underlineColorAndroid="#f000"
              placeholder=" Enter Resolution Number"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
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
export default packageScreen;

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