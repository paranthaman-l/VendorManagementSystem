package com.paranthaman.vendormanagementsystem.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashBoardCount {
    private long vendorCount;
    private long organizationCount;
    private long contractCount;
    private long complaintCount;
}
