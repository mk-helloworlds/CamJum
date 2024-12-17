import visionLogo from '../assets/vision.png';
import missionLogo from '../assets/mission.png'
import easyBookingLogo from '../assets/easyBooking.png'
import customerServiceLogo from '../assets/customerServices.png'
import freeCancellationLogo from '../assets/freeCacellation.png'
import directFlyLogo from '../assets/directFly.png'

export interface aboutType {
    title: string,
    description: string,
    image?: string
}

const aboutCompanyData: aboutType =
    {
        title: 'CamJum',
        description: 'Our Company provides service for Cambodian who live in Korea to Booking airplane ticket by\n' +
            '                    themselves through an App.',
        image: ''
    }

const aboutVisonData: aboutType =
    {
        title: 'Vision',
        description: 'Collaborate together to provide an easy method to check the price and book airplane ticket for 24hours aday.\n',
        image: ''
    }

const aboutMissionVision: aboutType [] = [
    {
        title: "Vision",
        description: 'Collaborate together to provide an easy method to check the price and book airplane ticket for 24hours aday.\n',
        image: visionLogo
    },
    {
        title: 'Mission',
        description: 'Camjum\'s mission to lead and serve foreigner who live in Korea to check and book airplane ticket buy using their mother tongue language. ',
        image: missionLogo
    }
]

const aboutMissionData: aboutType =
    {
        title: 'Mission',
        description: 'Camjum\'s mission to lead and serve foreigner who live in Korea to check and book airplane ticket buy using their mother tongue language. ',
        image: ''
    }
const aboutContactData: aboutType =
    {
        title: 'Have Questions or Need Guidance?\n',
        description: 'Whether you\'re looking for flight details or require assistance with your booking, our CAMJUM team is here to provide you with the information you need.\n',
        image: ''
    }

export interface whyChooseType {
    image: string,
    title: string,
    description: string
}

const whyChooseData: whyChooseType [] = [
    {
        image: easyBookingLogo,
        title: 'Easy Booking Platform',
        description: ' Book in a few taps with our user-friendly mobileapp. Quick, easy, done.'
    },
    {
        image: customerServiceLogo,
        title: '24/7 Customer Support',
        description: 'Anytime you need us, we\'re here. Day or night, help is just a call away.'
    },
    {
        image: freeCancellationLogo,
        title: 'Free Cancellation',
        description: 'Change of plans? No problem. Cancel for free, no questions asked.'
    },
    {
        image: directFlyLogo,
        title: 'Direct Flight Only',
        description: 'Fly direct from Korea to Cambodia and save time.'
    }
]

export {aboutCompanyData, aboutVisonData, aboutContactData, aboutMissionData, aboutMissionVision, whyChooseData}