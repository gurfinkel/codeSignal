#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub easyAssignmentProblem {
    my ($skills) = @_;

    return (@{@$skills[0]}[0] - @{@$skills[1]}[0] > @{@$skills[0]}[1] - @{@$skills[1]}[1]) ? [1, 2] : [2, 1];
}
