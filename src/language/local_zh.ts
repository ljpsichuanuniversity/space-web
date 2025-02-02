/*
 * Copyright (c) 2022 Institute of Software Chinese Academy of Sciences (ISCAS)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default {
	router: {
		home_main: "首页",
		home_file: "文件",
		me_recycle_bin: "回收站",
		my_setting: "我的",
		device: "设备",
		ao_space: "傲空间",
	},
	buttons: {
		common_save: "保存",
		common_edit: "编辑",
		common_ok: "确认",
		common_confirm: "确定",
		common_cancel: "取消",
		common_select_all: "全选",
		common_delete: "删除",
		common_more: "更多",
		common_next: "下一步",
		common_copy: "复制",
		common_open: "打开",
		common_move: "移动",
		common_rename: "重命名",
		common_detail: "详细信息",
		common_cancel_check: "取消选中",
		common_download: "下载",
		common_search: "请输入搜索内容",
		common_upload_file: "上传文件",
		common_upload_folder: "上传文件夹",
		create_folder: "新建文件夹",
		more_help: "帮助中心",
		more_download: "下载客户端",
		more_language: "多语言",
		more_logout: "退出登录",
		file_clear: "清空回收站",
		file_reduction: "还原",
		help: "帮助",
		last_step: "上一步",
		next_step: "下一步",
		verification: "验证",
		close: "关闭",
	},
	notify: {
		notify_title: "消息中心",
		notify_clear: "清空",
		nodata: "暂无消息",

		logout_desc: "您的登录已失效，若需再次登录，请进行扫码授权",
		member_delete_desc: "您的傲空间已被注销，将无法继续使用，请联系管理员。",
		restore_success_desc:
			"您的空间数据已完成恢复操作，如有疑问，请联系管理员。",
		member_self_delete: "空间注销",
		revoke: "下线通知",
		restore_success: "数据恢复完成",

		uninstall: "卸载通知",
		uninstall_desc:
			"管理员已卸载傲空间应用【{appName}】，您将无法继续使用，如有疑问，请联系管理员",
		memories_desc: "小傲帮您整理了一些过往回忆，去重温下吧~",

		many_files: "{name} 等{count}个文件",
		wait_execution: "等待执行",
		opera_fail: "操作失败",
		opera_suc: "操作成功",

		create: "新建文件夹",
		move: "移动",
		delete: "删除",
		rename: "重命名",
		copy: "复制",
		restore: "回收站还原",
		clear_restore: "清空回收站",
		message_title:
			"显示已登录空间的所有终端信息，建议您对陌生终端进行下线操作，以防止隐私泄露，被下线的终端仍然可以再次扫码授权登录。",
		loading: "请稍后",
	},
	breadcrumb: {
		select_files: "已选中 {count} 个文件/文件夹",
	},
	space: {
		home_photo: "图片",
		home_all: "全部",
		home_myspace: "我的空间",
		home_video: "视频",
		home_document: "文档",
		home_other: "其他",
		file_name: "文件名",
		modify_time: "修改日期",
		upload: "上传",
		select_folder: "选择文件夹",
		size: "大小",
		location: "位置",
		detail_info: "详细信息",
		file_drag_upload: "文件拖入, 即可上传",
		not_contain: "未发现包含 ",
		contain_file: " 的内容",
		delete_file: "删除文件",
		delete_content: "确认删除“{name}”吗？",
		delete_success: "删除成功",
		delete_fail: "删除失败",
		folder: "新建文件夹",
		file_name_only: "文件名称只支持中文、英语、数字、下划线",
		rename_success: "重命名成功",
		rename_fail: "重命名失败",
		create_success: "创建成功",
		create_fail: "创建失败",
		copy_fail_contains: "复制失败,目标目录已包含{name}",
		move_fail_contains: "移动失败,目标目录已包含{name}",
		move_suc: "移动成功",
		move_fail: "移动失败",
		move_fail_self: "不能将文件夹移动到自身下面！！！",
		copy_suc: "复制成功",
		copy_fail: "复制失败",
		view_details: "查看详情",
		task_list: "任务队列",
		preview_support: "暂不支持预览该文件",
		file_recycle_bin: "确认将“{name}”移入回收站吗",
		file_recycle_bins: "确认将这些文件移入回收站吗？",
		file_del: "正在删除",
	},
	recycle: {
		delete_time: "删除日期",
		recycle_nodata: "没有要回收的文件哦",
		clear_desc: "确认要清空回收站吗？",
		clear_success: "清空成功",
		clear_fail: "清空失败",
		del_desc: "确认彻底删除 {name} 吗？ | 确认要彻底删除这些文件吗？",
		del_success: "删除成功",
		del_fail: "删除失败",
		restore_desc: "确认还原 {name} 吗？ | 确认还原这些文件吗？",
		restore_success: "还原成功",
		restore_fail: "还原失败",
		restoring: "正在还原",
	},
	index: {
		time_yesterday: "昨天",
	},
	share: {
		video_preview: "暂不支持视频预览",
	},
	album: {
		memories: "回忆",
	},
	setting: {
		lan: "局域网",
		wlan: "互联网",
		person_info: "空间信息",
		person_icon: "头像",
		nick_name: "空间名称",
		signature: "个性签名",
		name_tips: "请输入您的空间标识，最多24个字",
		signature_tips: "用一段话介绍自己，会在你的个人页面显示，最多输入120个字",
		space_channel: "空间访问通道",
		domain_name: "域名",
		domain_name_tips: "* 域名仅支持在绑定手机上编辑。",
		change_avatar: "更换头像",
		select_picture: "选择图片",
		avatar_preview: "头像预览",
		product_sn: "SN号",
		total: "总容量",
		used: "已使用",
		unused: "未使用",
		bound_device: "绑定设备",
		current_device: "当前设备",
		terminal_desc:
			"显示已登录空间的所有终端信息，建议您对陌生终端进行下线操作，以防止隐私泄露，被下线的终端仍然可以再次扫码授权登录。",
		ip_reference: "* IP 属地仅供参考",
		terminal_name: "终端名称",
		terminal_type: "登录端类型",
		login_location: "登录地点",
		login_last_time: "最后登录时间",
		operation: "操作",
		offline: "下线",
		security: "安全",
		security_desc:
			"当您在新手机上重置安全密码时，密保邮箱用来验证是您本人操作，保障您的数据安全。",
		password: "安全密码",
		set: "已设置",
		change_password: "去修改",
		offline_terminal: "下线终端",
		offline_confirm: "确定要下线该终端吗？",
		offline_success: "操作成功",
		offline_fail: "操作失败,错误原因: {error}",
		space_id_error: "空间标识重复，请重新输入",
		open_source: "开源版",
	},
	safe: {
		password_desc:
			"安全密码为6位数字，只能由管理员设置和修改，请慎重保管此密码。",
		old_password: "原密码",
		new_password: "新密码",
		password_tip: "6位数字安全密码",
		repeat_password: "重复新密码",
		repeat_tip: "再次填写确认",
		safe_password_val: "安全密码验证",
		app_scenarios: "应用场景",
		unbound_device: "解绑设备，管理员需要正确输入安全密码，才能完成解绑操作。",
		admin_val: "需要输入安全密码验证管理员身份的其他情形。",
		please_confirm: "请在绑定手机上确认",
		bound_phone_error: "绑定手机不可用",
		password_error: "密码错误，请1分钟后重试",
		cannot_opa: "无法完成操作",
		admin_cannot: "原因：管理员绑定端无法确认",
		bound_new_phone: "请在新的手机上完成【绑定设备】后再操作修改安全密码",
		bound_reject: "原因：管理员在绑定端拒绝了此操作",
		unbound_email: "原因：未绑定密保邮箱",
		reset_desc: "您可以在绑定或授权手机上通过非密保邮箱的方式来重置安全密码",
		opa_timeout: "原因：操作超时，请重新开始",
		request_times: "原因：请求次数过多，请10分钟后重试",
		change_password: "修改安全密码",
		val_tip: "正在验证，请稍后...",
		password_only_tip: "密码必须是6位纯数字",
		password_match: "新密码不一致",
		change_password_suc: "修改密码成功",
		old_password_err: "原密码错误",
		password_re_input: "新密码不能与原密码相同，请重新输入",
		reset_password_suc: "重置密码成功",
		password_error_num: "密码错误,还剩{count}次机会",
	},
	downUpload: {
		download_detail: "下载详情",
		upload_detail: "上传详情",
		no_task: "暂无任务",
		network: "当前网络",
		network_lan: "局域网直连",
		network_wan: "互联网转发",
		network_offline: "离线",
		close_tip: "有文件未完成，确定离开？",
		file_already_in: "{file}等文件已经在下载列表中了,请到下载列表查看",
		folder_limit:
			"{file}所在的文件夹层级和上传所在文件夹层级加一起超过{count}层,请重新选择",
		state_pause: "已暂停",
		down_wait: "等待下载",
		down_download: "正在下载...",
		down_complete: "下载完成",
		down_fail: "下载失败",
		upload_wait: "等待上传",
		upload_download: "正在上传...",
		upload_complete: "上传完成",
		upload_fail: "上传失败",
		down_start: "已开始下载",
		insufficient: "(空间不足)",
		no_exist: "文件已被删除或移动，请刷新后重试",
	},
	login: {
		other_login: "其他登录方式",
		version: "最新版傲空间 App - 首页 - 扫一扫",
		scan_code: "扫码登录",
		please_use_phone: "请使用手机上的 {app} 扫码登录",
		use_scan: "请使用 {app} 扫码登录",
		web_needs: "网页版傲空间需要配合手机使用",
		privacy: "隐私政策",
		user: "用户协议",
		code: "请输入授权码",
		copyright: "Copyright © 2022-2023 中科南京软件技术研究院",
		enter: "进入傲空间",
		more: "登录更多傲空间",
		auto: "的傲空间",
		cancel: "取消登录",
		confirm: "请在绑定手机上确定登录",
		codeError: "授权码错误，请重新输入",
		error_times: "错误次数过多，请稍候重试",
		auth_code_help: "如何查看授权码",
		phone_show_code: "请输入手机上显示的 {num} 位授权码",
		domain_login: "域名 / 空间标识登录",
		input_domain: "请输入要访问的空间域名 / 空间标识",
		domain_name: "示例：***.ao.space 或 小傲***",
		space_not_found: "空间不存在，请检查输入的内容是否正确",
		space_not_found_mobile: "空间不存在，请检查输入<br/>的内容是否正确",
		space_id_duplicate: "登录失败，空间标识重复，请编辑空间标识或使用域名登录",
		switchLan: "是否切换到局域网络，体验更快的速度？",
		switchWan: "局域网络不可用，是否切换至互联网继续使用？",
		switchNow: "立即切换",
	},
	error: {
		unknown: "未知错误",
		number: "授权码错误",
		bkey: "bkey错误",
		network: "网络错误",
		offline: "该终端已下线",
		offline_notify: "设备离线，请检查设备或网络情况",
		service_exception: "服务异常，请稍后重试",
	},
}
