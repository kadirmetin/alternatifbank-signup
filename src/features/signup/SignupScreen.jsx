import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { db } from "../../App/firebase";
import { addDoc, collection } from "firebase/firestore";

//Utils
import { check } from "../../utils/checkTC";
import { isValidNumber } from "libphonenumber-js";

//Components
import MyTopArea from "../../components/MyTopArea";
import MyTextInput from "../../components/MyTextInput";
import MySubmitButton from "../../components/MyButton";
import MyDatePicker from "../../components/MyDatePicker";
// @ts-ignore
import MyCheckbox from "../../components/MyCheckbox";

//Pickers
import CityPicker from "../../components/Pickers/CityPicker";
import DistrictPicker from "../../components/Pickers/DistrictPicker";
import TownPicker from "../../components/Pickers/TownPicker";

const SignupScreen = () => {
  const [cityId, setCityId] = useState("");
  const [district, setDistrict] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#902149" barStyle={"light-content"} />
      <Formik
        initialValues={{
          id: "",
          serialId: "",
          date: "",
          phone: "",
          city: "",
          district: "",
          neighbourhood: "",
          kvkkCheckbox: false,
          bankCheckbox: false,
        }}
        validationSchema={Yup.object({
          id: Yup.string()
            .length(11, "TC Kimlik Numarası 11 haneli olmalıdır.")
            .required("TC Kimlik Numarası boş bırakılamaz.")
            .test(
              "checkId",
              "Girmiş olduğunuz TC Kimlik Numarası hatalıdır.",
              async (idValue) => {
                const isTrue = await check(idValue);
                return isTrue;
              }
            ),
          serialId: Yup.string()
            .length(9, "Seri Numarası 9 haneli olmalıdır.")
            .required("Seri Numarası boş bırakılamaz."),

          date: Yup.string().required("Doğum Tarihi boş bırakılamaz."),

          phone: Yup.string()
            .length(10, "Telefon Numarası 10 haneli olmalıdır.")
            .required("Telefon Numarası boş bırakılamaz.")
            .test("valid-phone-number", "Geçersiz telefon numarası", (value) =>
              isValidNumber(value, "TR")
            ),
          city: Yup.string().required("İl boş bırakılamaz."),
          district: Yup.string().required("İlçe boş bırakılamaz."),
          neighbourhood: Yup.string(),
          kvkkCheckbox: Yup.boolean().oneOf([false, true]),
          bankCheckbox: Yup.boolean().oneOf([true, false]),
        })}
        onSubmit={async (values, props) => {
          if (!values.kvkkCheckbox || !values.bankCheckbox) {
            Alert.alert("Lütfen KVKK ve Banka Sözleşmesini onaylayınız.");
            return;
          }
          const customer = values;
          await addDoc(collection(db, "customers"), customer);
          Alert.alert("Kayıt Başarılı");
          props.resetForm();
        }}
      >
        {(formik) => (
          <View style={styles.container}>
            <MyTopArea />
            <ScrollView>
              <MyTextInput
                label="TC Kimlik No"
                name="id"
                inputMode="numeric"
                icon="user-o"
                iconSize={18}
              />
              <MyTextInput
                label="Kimlik Seri No"
                name="serialId"
                inputMode="text"
                icon="id-card-o"
                iconSize={18}
                addQuestionIcon={true}
              />
              <MyDatePicker
                label="Doğum Tarihi"
                name="date"
                icon="calendar"
                iconSize={18}
              />
              <MyTextInput
                label="Cep Telefonu No"
                name="phone"
                inputMode="numeric"
                icon="phone"
                iconSize={18}
              />
              {
                <>
                  <CityPicker label="İl" icon="map-o" iconSize={18} />
                  {setCityId(formik.values.city)}
                </>
              }
              {
                <>
                  {cityId !== "" && (
                    <DistrictPicker
                      cityId={cityId}
                      label="İlçe"
                      icon="map-marker"
                      iconSize={18}
                    />
                  )}
                  {setDistrict(formik.values.district)}
                </>
              }
              {district !== "" && (
                <>
                  <TownPicker
                    cityId={cityId}
                    district={district}
                    label="Mahalle"
                    icon="location-arrow"
                    iconSize={18}
                  />
                </>
              )}
              <MyCheckbox
                label="KVKK Metni'ni okudum ve bilgilendirildim."
                name="kvkkCheckbox"
              />
              <MyCheckbox
                label="Alternatif Bank A.Ş.'nin reklam iznini kabul ediyorum."
                name="bankCheckbox"
              />
            </ScrollView>
            <MySubmitButton title={"Devam Et"} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
