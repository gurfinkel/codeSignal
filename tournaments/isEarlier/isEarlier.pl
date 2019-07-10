#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isEarlier {
    my ($time1, $time2) = @_;

    return 60 * @$time1[0] + @$time1[1] < 60 * $$time2[0] + $$time2[1];
}
