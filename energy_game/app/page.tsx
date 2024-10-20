'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import FormInput from './components/FormInput';
import Previewer from './components/Previewer';
import RunButton from './components/RunButton';
import styles from './components/Home.module.css';


interface FormData {
  state: string;
  buildingUse: string;
  buildingShape: string;
  buildingAge: string;
  squareFootage: string;
  ceilingHeight: string;
  wallArea: string;
  wwr: string;
  orientation: string;
  energyCode: string;
  hvacCategory: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    state: 'Georgia',
    buildingUse: 'Office',
    buildingShape: '',
    buildingAge: '',
    squareFootage: '',
    ceilingHeight: '',
    wallArea: '',
    wwr: '',
    orientation: '',
    energyCode: '',
    hvacCategory: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
  };

  return (
    <div className={styles.container}>
      <h1>Your Energy Bill Predictor</h1>
      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <FormInput
            label="Where is your house?"
            name="state"
            value={formData.state}
            onChange={handleChange}
            readOnly
          />
          <FormInput
            label="What this building used for?"
            name="buildingUse"
            value={formData.buildingUse}
            onChange={handleChange}
            readOnly
          />

          <h3>Detailed settings</h3>

          <FormInput
            label="Building Shape:"
            name="buildingShape"
            value={formData.buildingShape}
            onChange={handleChange}
          />
          <FormInput
            label="Building Age:"
            name="buildingAge"
            value={formData.buildingAge}
            onChange={handleChange}
          />
          <FormInput
            label="Square Footage:"
            name="squareFootage"
            value={formData.squareFootage}
            onChange={handleChange}
          />
          <FormInput
            label="Ceiling Height:"
            name="ceilingHeight"
            value={formData.ceilingHeight}
            onChange={handleChange}
          />
          <FormInput
            label="Wall Area:"
            name="wallArea"
            value={formData.wallArea}
            onChange={handleChange}
          />
          <FormInput
            label="WWR (Window to Wall Ratio):"
            name="wwr"
            value={formData.wwr}
            onChange={handleChange}
          />
          <FormInput
            label="Orientation:"
            name="orientation"
            value={formData.orientation}
            onChange={handleChange}
          />
          <FormInput
            label="Energy Code:"
            name="energyCode"
            value={formData.energyCode}
            onChange={handleChange}
          />
          <FormInput
            label="HVAC Category:"
            name="hvacCategory"
            value={formData.hvacCategory}
            onChange={handleChange}
          />
        </form>

        <div className={styles.previewSection}>
          <Previewer />
          <RunButton onClick={() => console.log('Run')} />
        </div>
      </div>
    </div>
  );
}
