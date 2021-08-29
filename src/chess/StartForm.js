import React from 'react';
import { Formik, Form } from 'formik';
import StartFormSchema from './schema';

const INITIAL_VALUES = {
  boardSize: 6,
  steps: 10,
};

function StartForm({ startChess }) {
  const handleSubmit = async (values) => {
    startChess(values);
  };

  return (
    <div className="start-form">
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={StartFormSchema}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="form-control">
              <label className="form-label" htmlFor="boardSize">Chess Board Size (nxn)</label>
              <input
                type="text"
                name="boardSize"
                value={values.boardSize}
                onChange={e => setFieldValue('boardSize', e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="form-label" htmlFor="steps">Number of available steps</label>
              <input
                type="text"
                name="steps"
                value={values.steps}
                onChange={e => setFieldValue('steps', e.target.value)}
              />
            </div>

            <div className="form-control form-submit">
              <button type="submit">OK</button>
            </div>
          </Form>
        )}
      </Formik>

    </div>
  );
}

export default StartForm;
