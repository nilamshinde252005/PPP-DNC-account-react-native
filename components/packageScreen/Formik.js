import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

 {
    <Formik>
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
    </Formik>
}
export default userSignup;