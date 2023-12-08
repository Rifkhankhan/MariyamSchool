import React from 'react'
import styles from './TableComponent.module.css'
import { useNavigate } from 'react-router-dom'
const TableComponent = ({
	headBackgroundColor,
	headerColor,
	backgroundColor,
	headers,
	datas,
	extraDatas
}) => {

	return (
		<>
			<table
				className={styles.student_table}
				style={{ backgroundColor: backgroundColor }}>
				<thead>
					<tr
						className={styles.table_head}
						style={{
							backgroundColor: headBackgroundColor,
							color: headerColor
						}}>
						{headers.map(header => (
							<th style={{ textTransform: 'capitalize' }} key={header}>{header}</th>
						))}
					</tr>
				</thead>

				<tbody>
					{datas.map(data => (
						<tr onClick={() => extraDatas.selectDateHandler(data.date)} key={data.id}>
							<td>{datas.indexOf(data) + 1}</td>
							<td>{data.firstName} {data.lastName}</td>
							<td>
								{
									data?.students?.filter(
										student => student.class === extraDatas.className.toString()
									).length
								}
							</td>
							<td>{data.age}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default TableComponent
