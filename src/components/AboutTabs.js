import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { tabs } from './AboutTabsElements'
import './AboutTabs.css'

export default function AboutTabs() {
    return (
        <Tabs>
            <TabList>
                {tabs.map((element, index) => {
                    return (
                        <Tab key={index}>{element.title}</Tab>
                    )
                })}
            </TabList>
            {tabs.map((element, index) => {
                return (
                    <TabPanel index={index} key={index}>
                        <div className='test'>{element.text}</div>
                    </TabPanel>
                )
            })}
        </Tabs>
    )
}