import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./form.css";
import FormField from "./FormFields";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
const VitalSigns = () => {
  const [vitalSignsData, setvitalSignsData] = useState({
    vital_dateTime: "",
    vital_sbp: "",
    vital_dbp: "",
    vital_mean_ap: "",
    vital_heart_rate: "",
    vital_rate_method: "",
    vital_pulse_rhythm: "",
    vital_respiratory_rate: "",
    vital_respiratory_effort: "",
    vital_etco2: "",
    vital_co: "",
    vital_blood_glucose: "",
    vital_temperature: "",
    vital_pain_scale_score: "",
    vital_pain_scale_type: "",
    vital_pulse_oximetry: "",
    vital_stroke_scale_score: "",
    vital_stroke_scale_type: "",
    vital_coma_score_eye: "",
    vital_coma_score_verbal: "",
    vital_coma_score_motor: "",
    vital_coma_score_qualifier: "",
    vital_coma_score_total: "",
    vital_reperfusion_checklist: "",
    vital_apgar: "",
    vital_revised_trauma_score: "",
    vital_body_weight: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(vitalSignsData);
    // alert("form submited");
    // navigate("/success");
    // try { //should have async keyword before event
    //   await axios.post('https://example.com/api', vitalSignsData);
    //   history.push('/success');
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="d-flex flex-column mb-2 gap-3 border border-primary p-4">
            <h1>Cardiovascular Vital Signs</h1>
            <FormField
              label="Date/Time Vital Signs Taken"
              type="date"
              name="vital_dateTime"
              value={vitalSignsData.vital_dateTime}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_dateTime: event.target.value,
                })
              }
            />
            <FormField
              label=" SBP (Systolic Blood Pressure)"
              name="vital_sbp"
              value={vitalSignsData.vital_sbp}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_sbp: event.target.value,
                })
              }
            />
            <FormField
              label="DBP (Diastolic Blood Pressure)"
              name="vital_dbp"
              value={vitalSignsData.vital_dbp}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_dbp: event.target.value,
                })
              }
            />
            <FormField
              label="Mean Arterial Pressure"
              name="vital_mean_ap"
              value={vitalSignsData.vital_mean_ap}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_mean_ap: event.target.value,
                })
              }
            />
            <FormField
              label="Pulse Rhythm"
              name="vital_pulse_rhythm"
              value={vitalSignsData.vital_pulse_rhythm}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_pulse_rhythm: event.target.value,
                })
              }
            />
            <FormField
              label="Heart Rate"
              name="vital_heart_rate"
              value={vitalSignsData.vital_heart_rate}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_heart_rate: event.target.value,
                })
              }
            />
            <FormField
              label=" Method of Heart Rate Measuremen"
              name="vital_heart_rate_method"
              value={vitalSignsData.vital_heart_rate_method}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_heart_rate_method: event.target.value,
                })
              }
            />
          </div>
        );
      case 2:
        return (
          <div className="d-flex flex-column mb-2 gap-3 border border-primary p-4">
            <h1>Respiratory Vital Signs:</h1>
            <FormField
              label="Respiratory Rate"
              name="vital_respiratory_rate"
              value={vitalSignsData.vital_respiratory_rate}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_respiratory_rate: event.target.value,
                })
              }
            />
            <FormField
              label="Respiratory Effort"
              name="vital_respiratory_effort"
              value={vitalSignsData.vital_respiratory_effort}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_respiratory_effort: event.target.value,
                })
              }
            />
            <FormField
              label="End Title Carbon Dioxide (ETCO2)"
              name="password"
              value={vitalSignsData.vital_etco2}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_etco2: event.target.value,
                })
              }
            />
            <FormField
              label=" Carbon Monoxide (CO)"
              name="vital_co"
              value={vitalSignsData.vital_co}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_co: event.target.value,
                })
              }
            />
          </div>
        );
      case 3:
        return (
          <div className="d-flex flex-column mb-2 gap-3 border border-primary p-4">
            <h1>Neurological Vital Signs</h1>
            <FormField
              label="Stroke Scale Score"
              name="vital_stroke_scale_score"
              value={vitalSignsData.vital_stroke_scale_score}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_stroke_scale_score: event.target.value,
                })
              }
            />
            <FormField
              label=" Stroke Scale Type"
              name="vital_stroke_scale_type"
              value={vitalSignsData.vital_stroke_scale_type}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_stroke_scale_type: event.target.value,
                })
              }
            />
            <FormField
              label="Glasgow Coma Score-Eye"
              name="vital_coma_score_eye"
              value={vitalSignsData.vital_coma_score_eye}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_coma_score_eye: event.target.value,
                })
              }
            />
            <FormField
              label="Glasgow Coma Score-Verbal"
              name="vital_coma_score_verbal"
              value={vitalSignsData.vital_coma_score_verbal}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_coma_score_verbal: event.target.value,
                })
              }
            />
            <FormField
              label="Glasgow Coma Score-Motor"
              name="vital_coma_score_motor"
              value={vitalSignsData.vital_coma_score_motor}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_coma_score_motor: event.target.value,
                })
              }
            />
            <FormField
              label="Glasgow Coma Score-Qualifier"
              name="vital_coma_score_qualifier"
              value={vitalSignsData.vital_coma_score_qualifier}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_coma_score_qualifier: event.target.value,
                })
              }
            />
            <FormField
              label="Total Glasgow Coma Score"
              name="vital_coma_score_total"
              value={vitalSignsData.vital_coma_score_total}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_coma_score_total: event.target.value,
                })
              }
            />
          </div>
        );
      case 4:
        return (
          <div className="d-flex flex-column mb-2 gap-3 border border-primary p-4">
            <h1>Other Vital Signs</h1>
            <FormField
              label="Blood Glucose Level"
              name="vital_blood_glucose"
              value={vitalSignsData.vital_blood_glucose}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_blood_glucose: event.target.value,
                })
              }
            />
            <FormField
              label="Temperature"
              name="vital_temperature"
              value={vitalSignsData.vital_temperature}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_temperature: event.target.value,
                })
              }
            />
            <FormField
              label="Pain Scale Score"
              name="vital_pain_scale_score"
              value={vitalSignsData.vital_pain_scale_score}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_pain_scale_score: event.target.value,
                })
              }
            />
            <FormField
              label="Pain Scale Type"
              name="vital_pain_scale_type"
              value={vitalSignsData.vital_pain_scale_type}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_pain_scale_type: event.target.value,
                })
              }
            />
            <FormField
              label="Pulse Oximetry"
              name="vital_blood_glucose"
              value={vitalSignsData.vital_pulse_oximetry}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_pulse_oximetry: event.target.value,
                })
              }
            />
          </div>
        );
      case 5:
        return (
          <div className="d-flex flex-column mb-2 gap-3 border border-primary p-4">
            <h1>Miscellaneous Vital Signs</h1>
            <FormField
              label="Reperfusion Checklist"
              name="vital_reperfusion_checklist"
              value={vitalSignsData.vital_reperfusion_checklist}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_reperfusion_checklist: event.target.value,
                })
              }
            />
            <FormField
              label="APGAR"
              name="vital_apgar"
              value={vitalSignsData.vital_apgar}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_apgar: event.target.value,
                })
              }
            />
            <FormField
              label="Revised Trauma Score "
              name="vital_revised_trauma-score"
              value={vitalSignsData.vital_revised_trauma_score}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_revised_trauma_score: event.target.value,
                })
              }
            />
            <FormField
              label="Estimated Body Weight in Kilograms"
              name="vital_body_weight"
              value={vitalSignsData.vital_body_weight}
              onChange={(event) =>
                setvitalSignsData({
                  ...vitalSignsData,
                  vital_body_weight: event.target.value,
                })
              }
            />
          </div>
        );
      default:
        return null;
    }
  };
  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  return (
    <div className="root-container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        {renderForm()}
        {currentStep !== 1 && (
          <FormButton text="prev" label="prev" onClick={prevStep} />
        )}
        {currentStep !== 5 ? (
          <FormButton text="Next" label="next" onClick={nextStep} />
        ) : (
          <FormButton
            text="Submit"
            label="Submit"
            type="submit"
            onClick={handleSubmit}
          />
        )}
      </form>
    </div>
  );
};

export default VitalSigns;
