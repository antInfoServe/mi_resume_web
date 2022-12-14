import React from "react";
import { Document, Page, Text, View, Section, Link, StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
    page: {
        padding: 30
    },
    section: {
        marginTop: 6,
        marginBottom: 6
    },
    subSection: {
        margin: 2,
    },
    subSecFlex: {
        margin: 5,
        flexDirection: "row"
    },
    title: {
        fontWeight: 700,
        fontSize: 14,
        paddingBottom: 4,
    },
    heading: {
        fontWeight: 700,
        fontSize: 12,
        paddingTop: 4,
        paddingBottom: 4,
    },
    body: {
        fontSize: 11,
        paddingTop: 2,
        paddingBottom: 4,
    },
    bodyLight:{
        fontSize: 11,
        paddingTop: 2,
        paddingBottom: 4,
        color:'#333333'
    },
    list: {
        fontSize: 12,
        padding: 10,
        fontSize: 11,
        marginRight: 5,
        backgroundColor: '#e1e1e1',
        textAlign: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    longListView: {
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    longList: {
        marginLeft: 5,
        fontSize: 11,
        lineHeight: 1.5,
        paddingTop: 2,
        paddingBottom: 2,
        textAlign: 'justify',
    },
    hr: {
        borderBottom: .25
    }
});

const Personal = ({ resumeData }) => <View style={style.section}>
    <View style={style.subSection}>
        <Text style={style.title}>{resumeData.personal.name}</Text>
        <View style={style.hr}></View>
    </View>
    <View style={style.subSection}>
        <Text style={style.body}>{resumeData.personal.mobile}, {resumeData.personal.email}</Text>
        {
            resumeData.socialLink ? <Text style={style.body}>
                {resumeData.socialLink.linkedin ? resumeData.socialLink.linkedin + ", " : null}
                {resumeData.socialLink.facebook ? resumeData.socialLink.facebook + ", " : null}
                {resumeData.socialLink.instagram ? resumeData.socialLink.instagram + ", " : null}
                {resumeData.socialLink.github ? resumeData.socialLink.github + ", " : null}
                {resumeData.socialLink.portfolio ? resumeData.socialLink.portfolio : null}
            </Text> : null
        }
    </View>
</View>

const Experience = ({ resumeData }) => {
    if (resumeData.experience.length > 0) {
        return (
            <View style={style.section}>
                <View style={style.subSection}>
                    <Text style={style.title}>Work experience</Text>
                    <View style={style.hr}></View>
                </View>
                {
                    resumeData.experience.map((ele, index) => <View key={index} style={style.subSection}>
                        <Text style={style.heading}>{ele.designation}</Text>
                        <Text style={style.bodyLight}>{ele.employerName} | {ele.startDate.month}/ {ele.startDate.year} - {
                            ele.workHere ? "present" : ele.endDate.month + "/ " + ele.endDate.year
                        }</Text>
                        {
                            ele.detail.length > 0 ? ele.detail.map((e, index) => <View key={index} style={style.longListView}><Text style={style.body}>-</Text><Text key={index} style={style.longList}>{e}</Text></View>) : null
                        }
                    </View>)
                }
            </View>
        )
    }
    return null
}

const Education = ({ resumeData }) => {
    if (resumeData.experience.length > 0) {
        return (
            <View style={style.section}>
                <View style={style.subSection}>
                    <Text style={style.title}>Education</Text>
                    <View style={style.hr}></View>
                </View>
                {
                    resumeData.education.map((ele, index) => <View key={index} style={style.subSection}>
                        <Text style={style.heading}>{ele.degree} - {ele.field}</Text>
                        <Text style={style.bodyLight}>{ele.universityName} | {ele.startDate.month}/ {ele.startDate.year} - {
                            ele.presentHere ? "present" : ele.endDate.month + "/ " + ele.endDate.year
                        }</Text>
                        {
                            ele.detail.length > 0 ? ele.detail.map((e, index) => <View key={index} style={style.longListView}><Text style={style.body}>-</Text><Text key={index} style={style.longList}>{e}</Text></View>) : null
                        }
                    </View>)
                }
            </View>
        )
    }
    return null
}

const Skill = ({ resumeData }) => {
    if (resumeData.skill.length > 0) {
        return (
            <View style={style.section}>
                <View style={style.subSection}>
                    <Text style={style.title}>Skill</Text>
                    <View style={style.hr}></View>
                </View>
                <View style={style.subSecFlex}>
                    {
                        resumeData.skill.map((ele, index) => <Text key={index} style={style.list}>{ele}</Text>)
                    }
                </View>
            </View>
        )
    }
    return null
}

const Course = ({ resumeData }) => {
    if (resumeData.course.length > 0) {
        return (
            <View style={style.section}>
                <View style={style.subSection}>
                    <Text style={style.title}>Course</Text>
                    <View style={style.hr}></View>
                </View>
                {
                    resumeData.course.map((ele, index) => <View key={index} style={style.subSection}>
                        <Text style={style.heading}>{ele.courseName}</Text>
                        <Text style={style.bodyLight}>{ele.instituteName} | {ele.startDate.month}/ {ele.startDate.year} - {
                            ele.presentHere ? "present" : ele.endDate.month + "/ " + ele.endDate.year
                        }</Text>
                        <Text style={style.bodyLight}>{ele.certificate || null}</Text>
                    </View>)
                }
            </View>
        )
    }
    return null
}

const Award = ({ resumeData }) => {
    if (resumeData.award.length > 0) {
        return (
            <View style={style.section}>
                <View style={style.subSection}>
                    <Text style={style.title}>Award</Text>
                    <View style={style.hr}></View>
                </View>
                {
                    resumeData.award.map((ele, index) => <View key={index} style={style.subSection}>
                        <Text style={style.heading}>{ele.title}</Text>
                        <Text style={style.bodyLight}>{ele.issuer} | {ele.issueDate.month}/{ele.issueDate.year}</Text>
                        {
                            ele.detail.length > 0 ? ele.detail.map((e, index) => <View key={index} style={style.longListView}><Text style={style.body}>-</Text><Text key={index} style={style.longList}>{e}</Text></View>) : null
                        }
                    </View>)
                }
            </View>
        )
    }
    return null
}

const Language = ({ resumeData }) => {
    if (resumeData.language.length > 0) {
        return (
            <View style={style.section}>
                <View style={style.subSection}>
                    <Text style={style.title}>Language</Text>
                    <View style={style.hr}></View>
                </View>
                {
                    resumeData.language.map((ele, index) => <View key={index} style={style.subSection}>
                        <Text style={style.heading}>{ele.language}</Text>
                        <Text style={style.bodyLight}>Proficiency: {ele.proficiency}</Text>
                    </View>)
                }
            </View>
        )
    }
    return null
}

const Reference = ({ resumeData }) => {
    if (resumeData.reference.length > 0) {
        return (
            <View style={style.section}>
                <View style={style.subSection}>
                    <Text style={style.title}>Reference</Text>
                    <View style={style.hr}></View>
                </View>
                {
                    resumeData.reference.map((ele, index) => <View key={index} style={style.subSection}>
                        <Text style={style.heading}>{ele.name}</Text>
                        <Text style={style.bodyLight}>{ele.designation} - {ele.companyName}</Text>
                        <Text style={style.bodyLight}>{ele.mobile}, {ele.email}</Text>
                    </View>)
                }
            </View>
        )
    }
    return null
}


const StandardResumeDoc = ({ resumeData, resumeOrder }) => (
    <Document>
        <Page style={style.page}>
            {
                resumeOrder.map((ele, index) => {
                    switch (ele) {
                        case 'personal':
                            return <Personal key={index} resumeData={resumeData} />
                        case 'experience':
                            return <Experience key={index} resumeData={resumeData} />
                        case 'education':
                            return <Education key={index} resumeData={resumeData} />
                        case 'skill':
                            return <Skill key={index} resumeData={resumeData} />
                        case 'course':
                            return <Course key={index} resumeData={resumeData} />
                        case 'award':
                            return <Award key={index} resumeData={resumeData} />
                        case 'language':
                            return <Language key={index} resumeData={resumeData} />
                        case 'reference':
                            return <Reference key={index} resumeData={resumeData} />
                        default:
                            return null
                    }
                })
            }
        </Page>
    </Document>
);

export default StandardResumeDoc