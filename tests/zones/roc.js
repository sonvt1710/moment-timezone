"use strict";

var helpers = require("../helpers/helpers");

exports["ROC"] = {

	"guess:by:offset" : helpers.makeTestGuess("ROC", { offset: true, expect: "Asia/Manila" }),

	"guess:by:abbr" : helpers.makeTestGuess("ROC", { abbr: true, expect: "Asia/Shanghai" }),

	"1895" : helpers.makeTestYear("ROC", [
		["1895-12-31T15:53:59+00:00", "23:59:59", "LMT", -486],
		["1895-12-31T15:54:00+00:00", "23:54:00", "CST", -480]
	]),

	"1937" : helpers.makeTestYear("ROC", [
		["1937-09-30T15:59:59+00:00", "23:59:59", "CST", -480],
		["1937-09-30T16:00:00+00:00", "01:00:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("ROC", [
		["1945-09-20T15:59:59+00:00", "00:59:59", "JST", -540],
		["1945-09-20T16:00:00+00:00", "00:00:00", "CST", -480]
	]),

	"1946" : helpers.makeTestYear("ROC", [
		["1946-05-14T15:59:59+00:00", "23:59:59", "CST", -480],
		["1946-05-14T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1946-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1946-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1947" : helpers.makeTestYear("ROC", [
		["1947-04-14T15:59:59+00:00", "23:59:59", "CST", -480],
		["1947-04-14T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1947-10-31T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1947-10-31T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1948" : helpers.makeTestYear("ROC", [
		["1948-04-30T15:59:59+00:00", "23:59:59", "CST", -480],
		["1948-04-30T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1948-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1948-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1949" : helpers.makeTestYear("ROC", [
		["1949-04-30T15:59:59+00:00", "23:59:59", "CST", -480],
		["1949-04-30T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1949-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1949-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1950" : helpers.makeTestYear("ROC", [
		["1950-04-30T15:59:59+00:00", "23:59:59", "CST", -480],
		["1950-04-30T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1950-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1950-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1951" : helpers.makeTestYear("ROC", [
		["1951-04-30T15:59:59+00:00", "23:59:59", "CST", -480],
		["1951-04-30T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1951-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1951-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1952" : helpers.makeTestYear("ROC", [
		["1952-02-29T15:59:59+00:00", "23:59:59", "CST", -480],
		["1952-02-29T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1952-10-31T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1952-10-31T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1953" : helpers.makeTestYear("ROC", [
		["1953-03-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1953-03-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1953-10-31T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1953-10-31T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1954" : helpers.makeTestYear("ROC", [
		["1954-03-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1954-03-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1954-10-31T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1954-10-31T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1955" : helpers.makeTestYear("ROC", [
		["1955-03-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1955-03-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1955-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1955-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1956" : helpers.makeTestYear("ROC", [
		["1956-03-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1956-03-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1956-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1956-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1957" : helpers.makeTestYear("ROC", [
		["1957-03-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1957-03-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1957-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1957-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1958" : helpers.makeTestYear("ROC", [
		["1958-03-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1958-03-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1958-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1958-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1959" : helpers.makeTestYear("ROC", [
		["1959-03-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1959-03-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1959-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1959-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1960" : helpers.makeTestYear("ROC", [
		["1960-05-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1960-05-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1960-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1960-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1961" : helpers.makeTestYear("ROC", [
		["1961-05-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1961-05-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1961-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1961-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1974" : helpers.makeTestYear("ROC", [
		["1974-03-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1974-03-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1974-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1974-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1975" : helpers.makeTestYear("ROC", [
		["1975-03-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1975-03-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1975-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1975-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1979" : helpers.makeTestYear("ROC", [
		["1979-06-30T15:59:59+00:00", "23:59:59", "CST", -480],
		["1979-06-30T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1979-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1979-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	])
};