import React from 'react'
import { useState } from 'react'
import { tabs } from './AboutTabsElements'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './AboutTabs.css'

export default function AboutTabs() {
    return (
        <Tabs>
            <TabList>
                {tabs.map((element, index) => {
                    return (
                        <Tab>{element.title}</Tab>
                    )
                })}
            </TabList>
            {tabs.map((element, index) => {
                return (
                    <TabPanel index={index}>
                        <p className='test'>{element.text}</p>
                    </TabPanel>
                )
            })}
        </Tabs>
    )
}