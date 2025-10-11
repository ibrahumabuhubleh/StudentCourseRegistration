export type ID = string;

export type Course = {
id: ID;
code: string;
title: string;
description?: string;
credits: number;
};

export type Student = {
id: ID;
fullName: string;
email: string;
};

export type Enrollment = {
id: ID;
studentId: ID;
courseId: ID;
createdAt: string;
};

export type ApiResult<T> = { data: T };
