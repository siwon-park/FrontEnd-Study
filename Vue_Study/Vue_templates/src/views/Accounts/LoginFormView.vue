<template>
<v-app>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <!-- 로그인 폼 -->
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">당신의 계정으로 로그인하세요</h4>
                    <h6 class="text-center grey--text">안녕하세요?
                      <br>저는 박시원이라고 합니다
                    </h6>
                    <!-- <AccountErrorList></AccountErrorList> -->
                    <!-- 로그인 -->
                    <v-form>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-text-field v-model="login_credentials.username" label="Username" outlined dense color="blue" autocomplete="false" class="mt-16"></v-text-field>
                          <v-text-field v-model="login_credentials.password" label="Password" outlined dense color="blue" autocomplete="false" type="password"></v-text-field>
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox label="Remember Me" class="mt-n1" color="blue"></v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text">비밀번호 찾기</span>
                            </v-col>
                          </v-row>
                          <div class="text-center">
                            <v-dialog
                              v-model="dialog"
                              width="500"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  color="blue"
                                  dark
                                  v-bind="attrs"
                                  v-on="on"
                                  @click="login(login_credentials)"
                                >
                                  로그인
                                </v-btn>
                              </template>

                              <v-card>
                                <v-card-title class="text-h5 red lighten-2 text-white">
                                  에러 메세지
                                </v-card-title>
                                <v-card-text>
                                  <AccountErrorList></AccountErrorList>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="red lighten-2"
                                    text
                                    @click="dialog = false"
                                  >
                                    알겠습니다
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </div> 
                          <!-- <v-btn @click="login(login_credentials)" color="blue" dark block tile>로그인</v-btn> -->
                          <h5 class="text-center grey--text mt-4 mb-3">소셜 로그인</h5>
                          <div class="d-flex justify-space-between align-center mx-10 mb-16">
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">fab fa-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">fab fa-facebook</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="blue rounded-bl-xl">
                  <div style="text-align:center; padding: 180px 0;">
                    <v-card-text class="white--text">
                      <h3 class="text-center">아직도 회원이 아니세요?</h3>
                      <h6 class="text-center">지금 당장 계정을 생성하고 시작하세요!
                        <br>새로운 경험이 당신을 기다립니다
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn title outlined dark @click="step++">회원가입 하러가기</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <!-- 회원가입 폼 -->
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" sm="6" class="blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0;">
                    <v-card-text class="white--text">
                      <h3 class="text-center">이미 회원이신가요?</h3>
                      <h6 class="text-center">가입한 계정으로 로그인하시고 계속하세요</h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn title outlined dark @click="step--">로그인 페이지로 이동</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">계정 생성을 위한 회원가입</h4>
                    <h6 class="text-center grey--text">지금 가입하고 새로운 경험을 시작하세요!</h6>
                    <v-form>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field v-model="signup_credentials.username" label="Username" outlined dense color="blue" class="mt-4" autocomplete="false"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field v-model="signup_credentials.birth_date" label="생년월일" outlined dense color="blue" class="mt-4" autorcomplet="false" type="date"></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field v-model="signup_credentials.password1" label="비밀번호" outlined dense color="blue" autocomplete="false" type="password"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field v-model="signup_credentials.password2" label="비밀번호 확인" outlined dense color="blue" autorcomplet="false" type="password"></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field v-model="signup_credentials.sex" label="성별" outlined dense color="blue" autocomplete="false"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field v-model="signup_credentials.region" label="지역" outlined dense color="blue" autorcomplet="false"></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox label="약관에 동의" class="mt-n1" color="blue"></v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text ml-n4">개인정보/약관동의서</span>
                            </v-col>
                          </v-row>
                          <div class="text-center">
                            <v-dialog
                              v-model="dialog"
                              width="500"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  color="blue"
                                  dark
                                  v-bind="attrs"
                                  v-on="on"
                                  @click="signup(signup_credentials)"
                                >
                                  회원가입 완료
                                </v-btn>
                              </template>

                              <v-card>
                                <v-card-title class="text-h5 red lighten-2 text-white">
                                  에러 메세지
                                </v-card-title>
                                <v-card-text>
                                  <AccountErrorList></AccountErrorList>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="red lighten-2"
                                    text
                                    @click="dialog = false"
                                  >
                                    알겠습니다
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </div>  
                          <!-- <v-btn @click="signup(signup_credentials)" color="blue" dark block tile>회원가입 완료</v-btn> -->
                          <h6 class="text-center grey--text mt-4 mb-3">소셜 계정으로 가입하기</h6>
                          <!-- 아이콘 -->
                          <div class="d-flex justify-space-between align-center mx-10 mb-11">
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">fab fa-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">fab fa-facebook</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-app>
</template>

<script>
import { mapActions } from 'vuex'
import AccountErrorList from '@/components/Accounts/AccountErrorList.vue'

export default {
  name: 'LoginFormView',
  components: {
    AccountErrorList,
  },
  data() {
    return {
      step: 1,
      login_credentials: {
        username: '',
        password: '',
      },
      signup_credentials: {
        username: '',
        password1: '',
        password2: '',
        region: '',
        sex: '',
        birth_date:'',
      },
      dialog: false,
    }
  },
  props: {
    source: String
  },
  methods: {
    ...mapActions(['login', 'signup'])
  },
  // computed: {
  //     ...mapGetters(['authError'])
  //   },
}
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';
@import 'material-design-icons-iconfont/dist/material-design-icons.css';
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>