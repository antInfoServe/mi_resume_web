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
    list: {
        fontSize: 12,
        padding: 10,
        fontSize: 11,
        marginRight: 10,
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

const StandardResumeDoc = ({ resumeData }) => (
    <Document>
        <Page style={style.page}>
            <View style={style.section}>
                <View style={style.subSection}>
                    <Text style={style.title}>{resumeData.personal.name}</Text>
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
            <View style={style.hr}></View>
            {//experience section
                resumeData.experience.length > 0 ? <View style={style.section}>
                    <View style={style.subSection}>
                        <Text style={style.title}>Work experience</Text>
                    </View>
                    {
                        resumeData.experience.map((ele, index) => <View key={index} style={style.subSection}>
                            <Text style={style.heading}>{ele.designation}</Text>
                            <Text style={style.body}>{ele.employerName} | {ele.startDate.month}/ {ele.startDate.year} - {
                                ele.workHere ? "present" : ele.endDate.month + "/ " + ele.endDate.year
                            }</Text>
                            {
                                ele.detail.length > 0 ? ele.detail.map((e, index) => <View key={index} style={style.longListView}><Text style={style.body}>-</Text><Text key={index} style={style.longList}>{e}</Text></View>) : null
                            }
                        </View>)
                    }
                </View> : null
            }
            <View style={style.hr}></View>
            {//education section
                resumeData.education.length > 0 ? <View style={style.section}>
                    <View style={style.subSection}>
                        <Text style={style.title}>Education</Text>
                    </View>
                    {
                        resumeData.education.map((ele, index) => <View key={index} style={style.subSection}>
                            <Text style={style.heading}>{ele.degree} - {ele.field}</Text>
                            <Text style={style.body}>{ele.universityName} | {ele.startDate.month}/ {ele.startDate.year} - {
                                ele.presentHere ? "present" : ele.endDate.month + "/ " + ele.endDate.year
                            }</Text>
                            {
                                ele.detail.length > 0 ? ele.detail.map((e, index) => <View key={index} style={style.longListView}><Text style={style.body}>-</Text><Text key={index} style={style.longList}>{e}</Text></View>) : null
                            }
                        </View>)
                    }
                </View> : null
            }
            <View style={style.hr}></View>
            {//skill section
                resumeData.skill.length > 0 ? <View style={style.section}>
                    <View style={style.subSection}>
                        <Text style={style.title}>Skill</Text>
                    </View>
                    <View style={style.subSecFlex}>
                        {
                            resumeData.skill.map((ele, index) => <Text key={index} style={style.list}>{ele}</Text>)
                        }
                    </View>
                </View> : null
            }
            <View style={style.hr}></View>
            {//course section
                resumeData.course.length > 0 ? <View style={style.section}>
                    <View style={style.subSection}>
                        <Text style={style.title}>Course</Text>
                    </View>
                    {
                        resumeData.course.map((ele, index) => <View key={index} style={style.subSection}>
                            <Text style={style.heading}>{ele.courseName}</Text>
                            <Text style={style.body}>{ele.instituteName} | {ele.startDate.month}/ {ele.startDate.year} - {
                                ele.presentHere ? "present" : ele.endDate.month + "/ " + ele.endDate.year
                            }</Text>
                            <Text style={style.body}>{ele.certificate || null}</Text>
                        </View>)
                    }
                </View> : null
            }
            <View style={style.hr}></View>
            {//award section
                resumeData.award.length > 0 ? <View style={style.section}>
                    <View style={style.subSection}>
                        <Text style={style.title}>Award</Text>
                    </View>
                    {
                        resumeData.award.map((ele, index) => <View key={index} style={style.subSection}>
                            <Text style={style.heading}>{ele.title}</Text>
                            <Text style={style.body}>{ele.issuer} | {ele.issueDate.month}/{ele.issueDate.year}</Text>
                            {
                                ele.detail.length > 0 ? ele.detail.map((e, index) => <View key={index} style={style.longListView}><Text style={style.body}>-</Text><Text key={index} style={style.longList}>{e}</Text></View>) : null
                            }
                        </View>)
                    }
                </View> : null
            }
            <View style={style.hr}></View>
            {//language section
                resumeData.award.length > 0 ? <View style={style.section}>
                    <View style={style.subSection}>
                        <Text style={style.title}>Language</Text>
                    </View>
                    {
                        resumeData.language.map((ele, index) => <View key={index} style={style.subSection}>
                            <Text style={style.heading}>{ele.language}</Text>
                            <Text style={style.body}>Proficiency: {ele.proficiency}</Text>
                        </View>)
                    }
                </View> : null
            }
            <View style={style.hr}></View>
            {//reference section
                resumeData.reference.length > 0 ? <View style={style.section}>
                    <View style={style.subSection}>
                        <Text style={style.title}>Reference</Text>
                    </View>
                    {
                        resumeData.reference.map((ele, index) => <View key={index} style={style.subSection}>
                            <Text style={style.heading}>{ele.name}</Text>
                            <Text style={style.body}>{ele.designation} - {ele.companyName}</Text>
                            <Text style={style.body}>{ele.mobile}, {ele.email}</Text>
                        </View>)
                    }
                </View> : null
            }
        </Page>
    </Document>
);

export default StandardResumeDoc