/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from 'formik';
import CustomButton from '../../../theme/button';
import InputField from '../../../theme/input';
import styles from '../postCase.module.scss';

interface IProps {
  formik: FormikProps<any>;
}

const PostCaseStep1: React.FC<IProps> = ({ formik }) => {
  return (
    <div className={styles.form_card}>
      <h4>Client and Accident Details</h4>
      <div className={styles.form_section}>
        <h5>Client's Personal Details</h5>
        <div className={styles.fields_wrapper}>
          <div className={styles.md6}>
            <InputField
              label='Full name'
              formik={formik}
              placeholder='Name'
              name='full_name'
            />
          </div>
          <div className={styles.md6}>
            <InputField
              label='Phone number'
              formik={formik}
              placeholder='Phone'
              name='phone_number'
            />
          </div>
          <div className={styles.md6}>
            <InputField
              label='Email address'
              formik={formik}
              placeholder='Email'
              name='email_address'
            />
          </div>
          <div className={styles.md6}>
            <InputField
              label='Date of birth'
              formik={formik}
              placeholder=''
              name='date_birth'
              type='date'
            />
          </div>
        </div>
      </div>
      <div className={styles.form_section}>
        <h5>Client's Personal Details</h5>
        <div className={styles.fields_wrapper}>
          <div className={styles.md6}>
            <InputField
              label='Date of accident'
              formik={formik}
              placeholder=''
              name='date_accident'
              type='date'
            />
          </div>
          <div className={styles.md6}>
            <InputField
              label='Location of accident'
              formik={formik}
              placeholder='Freeway'
              name='location_accident'
            />
          </div>
          <div>
            <InputField
              label='Brief description of the accident'
              as='textarea'
              rows={6}
              formik={formik}
              placeholder='Enter a description...'
              name='description_accident'
            />
          </div>
          <div>
            <InputField
              label='Weather and road conditions (if relevant)'
              as='textarea'
              rows={6}
              formik={formik}
              placeholder='Enter a description...'
              name='weather_condition'
            />
          </div>
        </div>
      </div>
      <div className={styles.submit_btn_wrap}>
        <CustomButton
          variant='outline-primary'
          // onClick={() => setActiveStep((prev) => prev - 1)}
        >
          Cancel
        </CustomButton>
        <CustomButton onClick={() => formik.handleSubmit()}>
          Save & Next
        </CustomButton>
      </div>
    </div>
  );
};

export default PostCaseStep1;