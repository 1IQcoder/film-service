import React, { useState } from 'react'
import InputBlock1 from '../UI/InputBlock1/InputBlock';
import TitleBlock from '../UI/TitleBlock/TitleBlock';
import ContinueButton from '../UI/ContinueButton/ContinueButton';
import Form from '../UI/Form/Form';

const AddActor = function () {

    return (
      <div className='block_wrapper'>

        <TitleBlock>Добавить актера</TitleBlock>

        <Form action={"dsasda/sagsadg/ag"} method={"post"}>
          <InputBlock1 name={'firstname'} type={"text"}>
            Имя
          </InputBlock1>
          <InputBlock1 name={'lastname'} type={"text"}>
            Фамилия
          </InputBlock1>
          <InputBlock1 name={'birthday'} type={"text"}>
            День рождения
          </InputBlock1>
          <InputBlock1 name={'biography'} type={"text"}>
            Биография
          </InputBlock1>
          <InputBlock1 name={'imgPath'} type={"text"}>
            Фото
          </InputBlock1>

          <ContinueButton>Add Actor</ContinueButton>
        </Form>
      </div>
    )
}

export default AddActor;
















