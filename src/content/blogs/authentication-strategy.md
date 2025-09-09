---
title: Implementing Production level Authentication with Refresh Tokens
description: A comprehensive guide to implementing authentication for secure and seamless user authentication in web applications, using refresh tokens and access tokens.
date: 2025-09-09
readTime: 8
slug: production-level-authentication
---

## Prerequisites

1. Knowledge of web development (Node.js, Express, etc.)
2. Setting up a basic authentication system
3. Familiarity with JWT (JSON Web Tokens)

## Introduction

Using only an Access token for authentication is good while developing and learning how JWT works, but we need more for production-level authentication.

We should use the Refresh token also.

## Short History

### Username + password

**Pre-1990s:** Mostly stored on the server. Every request required re-entering credentials or maintaining them in memory during a connection.

**Early 1990s:** Rise of the World Wide Web (HTTP is stateless) meant websites needed a way to remember users across requests.

### Session Cookies

**1994:** Netscape introduced HTTP cookies.
Servers would store session data in memory or databases, and the browser sends the cookie back with every request.

### Access Tokens

APIs and web services grew in the late 1990s to early 2000s, so we need stateless authentication.

**2000:** OAuth 1.0 granting third-party apps access without sharing passwords.

**2010:** OAuth 2.0 standardized access tokens as a short-lived credential (often in JWT format).

### Refresh Tokens

**2010 (OAuth 2.0 spec):** Refresh tokens were introduced.

**Purpose:** Access tokens should be short-lived (for security), and refresh tokens allow clients to request new access tokens without making the user log in again.

Widely adopted in OAuth2 flows, mobile apps, and modern SPAs (Single Page Applications).

## When to use this Access + Refresh Token Strategy

Session cookies are good, but what if you need

1. Microservices architecture
2. Mobile applications
3. Serverless applications

That's when you need an Access + Refresh token strategy.

## Where to store tokens?

### Access Token

Store in memory (JavaScript variable); no one can read it from outside the application.

### Refresh Token

Store in a cookie to prevent XSS attacks. This cookie should have a long expiration time and be sent with every request to the server on a specific route only.

1. sameSite=Strict or Lax to prevent CSRF attacks.
2. path=/auth/refresh to limit exposure.
3. secure=true to ensure it's only sent over HTTPS.
4. domain=yourdomain.com to restrict to your domain.

Generate it using a random UUID or a secure random string generator, Hash it, and store it in the database/redis.

## Flow

1. User logs in with credentials.
2. Server validates credentials and issues an Access token (short-lived) and a Refresh token (long-lived).
3. Client stores the Access token in memory and the Refresh token in a secure, HttpOnly cookie.
4. Client includes the Access token in the Authorization header for API requests.
5. When the Access token expires, the client requests to the refresh endpoint with the Refresh token (automatically included in the cookie).
6. Server validates the Refresh token, issues a new Access token and a new Refresh token, and sends them back to the client.
7. Client updates the Access token in memory.
8. If the Refresh token is invalid or expired, the user is prompted to log in again.

<br>

**EASY!**

Not yet, there is more.

## Refresh Token Rotation

To increase security, we implement Refresh Token Rotation.

When the Access token expires, the client requests a new One by sending the Refresh token.

We maintain three states for Refresh tokens

1. VALID
2. USED
3. REVOKED

### Steps

1. Client sends a Refresh token to get a new Access token.
2. The server checks if it's VALID, marks the token as USED, and clears the cookie.
3. If it's USED or REVOKED, the request is denied, and all tokens for that user of that particular family(explained below) are REVOKED. Log it, and you can inform the user.

### Token Family

Each Refresh token belongs to a family identified by a unique family ID, like a group of related tokens.

It's created when the user logs in for the first time or when a new session is initiated.

When a Refresh token is rotated (i.e., exchanged for a new Access token), the new Refresh token inherits the same family ID.

If a token in a family is compromised (i.e., a USED or REVOKED token is presented), all tokens in that family are invalidated to prevent further misuse.

<br>

**That's All**

If you have any doubt, you can ask me on Twitter.
