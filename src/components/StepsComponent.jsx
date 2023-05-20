import PropTypes from 'prop-types'
import { Address } from "./Address"
import { Floor } from "./Floor"
import { FullName } from "./FullName"
import { stepComponentsNames } from '../stepComponentsNames'
import { SummaryStep } from './SummaryStep'
import {Options} from './Options'
import { Email } from './Email'

export const StepsComponent = ({step}) => {
        switch (step.component) {
            case stepComponentsNames.FullName:
                return <FullName />
            case stepComponentsNames.Address:
                return <Address />
            case stepComponentsNames.Floor:
                return <Floor />
            case stepComponentsNames.Summary:
                return <SummaryStep />
            case stepComponentsNames.Options:
                return <Options />
            case stepComponentsNames.Email:
                return <Email />
            default:
                return <div>Component not found</div> 
        }
}
StepsComponent.propTypes = {
    step: PropTypes.object.isRequired
}
