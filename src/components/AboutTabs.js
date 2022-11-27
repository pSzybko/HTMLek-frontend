import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import './AboutTabs.css'

export default function AboutTabs(props) {
    return (
        <Tabs>
            <TabList>
                {props.tabs.map((element, index) => {
                    return (
                        <Tab key={index}>{element.title}</Tab>
                    )
                })}
            </TabList>
            {props.tabs.map((element, index) => {
                return (
                    <TabPanel index={index} key={index}>
                        <div className='test'>{element.text}</div>
                    </TabPanel>
                )
            })}
        </Tabs>
    )
}