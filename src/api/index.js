import http from './http'

const avatar = 'data:image/png;base64,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'

const camps = [
  {
    "id": 1,
    "name": "敏捷训练营",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "openDate": 1555828911307,
  },
  {
    "id": 2,
    "name": "敏捷训练营",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "openDate": 1555828911307,
  },
  {
    "id": 3,
    "name": "敏捷训练营",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "openDate": 1555828911307,
  },
  {
    "id": 4,
    "name": "敏捷训练营",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "openDate": 1555828911307,
  },
  {
    "id": 5,
    "name": "敏捷训练营",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "openDate": 1555828911307,
  },
  {
    "id": 6,
    "name": "敏捷训练营",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "openDate": 1555828911307,
  },
];

const missions = [
  {
    "id": 1,
    "name": "任务",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "createdAt": 1555828911307,
  },
  {
    "id": 2,
    "name": "任务",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "createdAt": 1555828911307,
  },
  {
    "id": 3,
    "name": "任务",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "createdAt": 1555828911307,
  },
  {
    "id": 4,
    "name": "任务",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "createdAt": 1555828911307,
  },
  {
    "id": 5,
    "name": "任务",
    "description": "京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。",
    "createdAt": 1555828911307,
  },
];

const students = [
  {
    avatar,
    name: '王大狗',
    email: 'ergou@thoughtworks.com',
    score: 99,
  },
  {
    avatar,
    name: '李二狗',
    email: 'ergou@thoughtworks.com',
    score: 99,
  },
  {
    avatar,
    name: '赵二狗',
    email: 'ergou@thoughtworks.com',
    score: 99,
  },
  {
    avatar,
    name: '刘一手',
    email: 'ergou@thoughtworks.com',
    score: 20,
  },
  {
    avatar,
    name: '王五',
    email: 'ergou@thoughtworks.com',
    score: 5,
  },
];

export default {
  login() {
    return http.post('/login')
  },
  createCamp(camp) {
    // return http.post('/camp', camp);
    camps.push({
      id: Math.random(),
      ...camp,
      openDate: Date.now(),
    });
    camps.sort((a, b) => b.openDate - a.openDate);
    return Promise.resolve();
  },
  getCamp(id) {
    // return http.get(`/camp/${id}`);
    const camp = camps.find((c) => c.id == id);
    const result = {
      camp,
      missions,
      students,
    };
    return Promise.resolve(result);
  },
  getCamps() {
    // return http.get(`/camp`);
    return Promise.resolve([...camps]);
  },
  deleteCamp(id) {
    // return http.delete(`/camp/${id}`);
    const index = camps.findIndex((c) => c.id == id);
    camps.splice(index, 1);
    return Promise.resolve();
  }
}
