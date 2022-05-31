import React from "react";

export default function Signup() {
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          // border: "1px solid red",
          padding: "50px 51px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "800",
            lineHeight: "35px",
            fontSize: "28px",
          }}
        >
          회원가입
        </h2>
      </div>
      {/* 회원가입 */}
      <div
        style={{
          width: "1050px",
          margin: "0 auto",
          // border: "2px solid blue",
        }}
      >
        <p
          style={{
            textAlign: "right",
            verticalAlign: "bottom",
          }}
        >
          <span
            style={{
              color: "red",
              marginRight: "10px",
            }}
          >
            *
          </span>
          필수 입력사항
        </p>
        <div
          style={{
            width: "640px",
            // border: "1px solid pink",
            margin: "0 auto",
          }}
        >
          <table
            style={{
              width: "100%",
              borderTop: "3px solid #333",
            }}
          >
            <tbody>
              <tr>
                <th
                  style={{
                    width: "159px",
                    padding: " 20px 0 0 20px",
                    // border: "1px solid red",
                    verticalAlign: "top",
                    textAlign: "left",
                  }}
                >
                  아이디
                  <span
                    style={{
                      color: "red",
                      marginLeft: "3px",
                    }}
                  >
                    *
                  </span>
                </th>
                <td
                  style={{
                    padding: "10px 0",
                    textAlign: "left",
                    verticalAlign: "top",
                    fontSize: "14px",
                  }}
                >
                  <input
                    style={{
                      height: "44px",
                      padding: "0 14px",
                      width: "332px",
                    }}
                    placeholder="6자 이상의 영문 혹은 영문과 숫자 혼합"
                  ></input>
                  <button
                    style={{
                      margin: "0 0 0 10px",
                      width: "70px",
                      verticalAlign: "top",
                      height: "48px",
                      backgroundColor: "#fff",
                      borderRadius: "4px",
                      border: "1px solid #5f0080",
                      color: "#5f0080",
                    }}
                  >
                    중복확인
                  </button>
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    width: "159px",
                    padding: " 20px 0 0 20px",
                    // border: "1px solid red",
                    verticalAlign: "top",
                    textAlign: "left",
                  }}
                >
                  비밀번호
                  <span
                    style={{
                      color: "red",
                      marginLeft: "3px",
                    }}
                  >
                    *
                  </span>
                </th>
                <td
                  style={{
                    padding: "10px 0",
                    textAlign: "left",
                    verticalAlign: "top",
                    fontSize: "14px",
                  }}
                >
                  <input
                    style={{
                      height: "44px",
                      padding: "0 14px",
                      width: "332px",
                    }}
                    placeholder="비밀번호를 입력해주세요"
                  ></input>
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    width: "159px",
                    padding: " 20px 0 0 20px",
                    // border: "1px solid red",
                    verticalAlign: "top",
                    textAlign: "left",
                  }}
                >
                  비밀번호 확인
                  <span
                    style={{
                      color: "red",
                      marginLeft: "3px",
                    }}
                  >
                    *
                  </span>
                </th>
                <td
                  style={{
                    padding: "10px 0",
                    textAlign: "left",
                    verticalAlign: "top",
                    fontSize: "14px",
                  }}
                >
                  <input
                    style={{
                      height: "44px",
                      padding: "0 14px",
                      width: "332px",
                    }}
                    placeholder="비밀번호를 한번 더 입력해주세요"
                  ></input>
                  <button
                    style={{
                      margin: "0 0 0 10px",
                      width: "70px",
                      verticalAlign: "top",
                      height: "48px",
                      backgroundColor: "#fff",
                      borderRadius: "4px",
                      border: "1px solid #5f0080",
                      color: "#5f0080",
                    }}
                  >
                    비빌번호 확인
                  </button>
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    width: "159px",
                    padding: " 20px 0 0 20px",
                    // border: "1px solid red",
                    verticalAlign: "top",
                    textAlign: "left",
                  }}
                >
                  이메일
                  <span
                    style={{
                      color: "red",
                      marginLeft: "3px",
                    }}
                  >
                    *
                  </span>
                </th>
                <td
                  style={{
                    padding: "10px 0",
                    textAlign: "left",
                    verticalAlign: "top",
                    fontSize: "14px",
                  }}
                >
                  <input
                    style={{
                      height: "44px",
                      padding: "0 14px",
                      width: "332px",
                    }}
                    placeholder="이메일을 입력해주세요"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              paddingTop: "40px",
              textAlign: "center",
            }}
          >
            <button
              style={{
                width: "240px",
                height: "54px",
                color: "#fff",
                backgroundColor: "#5f0081",
                borderRadius: "5px",
              }}
            >
              가입하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
