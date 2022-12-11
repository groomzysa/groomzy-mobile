import React, { FC } from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-paper";
import Unorderedlist from "react-native-unordered-list";

import { GTitle } from "../../components";
import {
  KeyboardAvoidingViewContainer,
  ScrollViewContainer,
} from "../../utils/common/styles";
import { ContentContainer } from "./styles";

export const About: FC = () => {
  return (
    <KeyboardAvoidingViewContainer>
      <ScrollViewContainer>
        <ContentContainer>
          <GTitle title="Background" />
          <Text>
            Groomzy is a concept that was born in times of the 2020 COVID 19
            Global pandemic in response to offer convenient, transparent,
            flexible and reliable business operations platform for the beauty
            grooming industry.{"\n"}
          </Text>

          <Divider style={{ marginTop: 8, marginBottom: 8 }} />

          <GTitle title="About" />
          <View>
            <Text>
              Groomzy is a beauty grooming industry booking platform where
              service providers offer their services and the clients make
              bookings for these services.{"\n"}
            </Text>
            <Text>
              Both users (clients and service providers) can download the app to
              find service providers in their location.{"\n"}
            </Text>
            <Text>
              It is an Any time, Anywhere platform that has an in-house booking
              feature, and makes scheduling and managing bookings much easier.
              {"\n"}
            </Text>

            <Unorderedlist>
              <Text style={{ color: "gray" }}>
                No more waiting for 9am to call and book your appointment.
              </Text>
            </Unorderedlist>
            <Unorderedlist>
              <Text style={{ color: "gray" }}>No more bais pricing.</Text>
            </Unorderedlist>
            <Unorderedlist>
              <Text style={{ color: "gray" }}>
                To get the most out of groomzy, search for a service provider,
                view service provider details, choose a service and make a
                booking.
              </Text>
            </Unorderedlist>
            <Unorderedlist>
              <Text style={{ color: "gray" }}>
                Booking is easy, convenient and instant.{"\n"}
              </Text>
            </Unorderedlist>
          </View>

          <Divider style={{ marginTop: 8, marginBottom: 8 }} />

          <GTitle title="Values and Missions" />
          <View>
            <Unorderedlist>
              <Text style={{ color: "gray" }}>
                We promise to offer easy, convenient and instant booking.
              </Text>
            </Unorderedlist>
            <Unorderedlist>
              <Text style={{ color: "gray" }}>
                We promise to always put Groomzy clients’s interests first.
              </Text>
            </Unorderedlist>
            <Unorderedlist>
              <Text style={{ color: "gray" }}>
                We promise to provide flexible and reliable service.
              </Text>
            </Unorderedlist>
            <Unorderedlist>
              <Text style={{ color: "gray" }}>
                We promise to build trust and confidence between Groomzy and
                clients by offering excellent and reliable service.{"\n"}
              </Text>
            </Unorderedlist>
          </View>
        </ContentContainer>
      </ScrollViewContainer>
    </KeyboardAvoidingViewContainer>
  );
};
