import { useState } from 'react';
import './App.scss';
import { Form, Checkbox, Input, Switch, Radio, Space, Select, Button } from 'antd';


function App() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [textLabel, setTextLabel] = useState(null);
  const [isRemembering, setIsRemembering] = useState(false);
  const [stateSwitch, setStateSwitch] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dataForm, setDataForm] = useState(null)
  const [errorsForm, setErrorsForm] = useState(null)


  const reset = () => {
    setUserName(null);
    setPassword(null);
    setTextLabel(null);
    setIsRemembering(false);
    setSelectedOption(null);
  }




  return (
    <div className="app">
      <div className='container'>
        <Form
          onFinish={(values) => {
            console.log('values: ', values)
            setDataForm(values);
            }
          }
          onFinishFailed={(failedValues) => {
            console.log('failedValues: ', failedValues)
            setErrorsForm(failedValues)
            }}  
          > 
          <Form.Item 
            label="" 
            name='username'
            required
            rules={[{required: true, message: 'Please enter username'}]}
          >
            <div className='formItem noPassword'>
              <p className='label'>Username</p>
              <Input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

          </Form.Item>

          <Form.Item  
            label="" 
            name='password'
            required
            rules={[
              {required: true, message: 'Please enter password'},
              {
              validator(rule, value) {
                return new Promise((resolve, reject) => {
                  if (value?.length >= 4 && value?.length <= 12) resolve();
                  else reject("Your password is between 4 and 12 characters")
                })
              }
            }]}
          >
            <div className='formItem password'>
              <p className='label'>Password</p>
              <Input.Password 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </Form.Item>

          <Form.Item label="" name='inputTextLabel'>
            <div className='formItem noPassword'>
              <p className='label'>Text Inputs Label</p>
              <Input 
                value={textLabel}
                onChange={(e) => setTextLabel(e.target.value)}
              />
            </div>
          </Form.Item>

          <Form.Item label="" name='rememberMe'>
            <Checkbox
              checked={!!isRemembering}
              onChange={(e) => setIsRemembering(!e.target.value)}
            >
            Remember me
            </Checkbox>

          </Form.Item>

          <Form.Item label="" name='off'>
            <Switch 
              value={!!stateSwitch}
              onChange={(e) => setStateSwitch(!e)}
            />
          </Form.Item>

          <Radio.Group 
            // onChange={onChange} 
            // value={value}
            >
            <Space direction="vertical">
              <Radio value={1}>Radio section 1</Radio>
              <Radio value={2}>Radio section 2</Radio>
              <Radio value={3}>Radio section 3</Radio>

            </Space>
          </Radio.Group>

          <Form.Item 
            label="" 
            name='dropdownTitle'
          >
            <div className='formItem noPassword'>
              <p>Dropdown Title</p>
              <Select
                onChange={(value) => {
                  setSelectedOption(value)
                  console.log(value)
                }}
                value={selectedOption}

                options={[
                  { value: null, label: 'Dropdown option' },
                  { value: 1, label: 'Dropdown option 1' },
                  { value: 2, label: 'Dropdown option 2' },
                ]}
              />

            </div>
            </Form.Item>


        <div className="footer">
          <Button onClick={() => reset()}>Cancel</Button>
          <Button 
            htmlType='submit' 
            // disabled={}
          >Next</Button>
        </div>

        </Form>


      </div>
    </div>
  );
}

export default App;
